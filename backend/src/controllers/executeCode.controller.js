import { db } from "../libs/db.js";
import axios from "axios";

export const executeCode = async (req, res) => {
  const { source_code, language_id, stdin,  problemId } = req.body;
  const userId = req.user.id;

  try {
    // Step 1: Submit code to Judge0
    const submitResponse = await axios.post(`${process.env.JUDGE0_API_URL}/submissions`, {
      source_code,
      language_id,
      stdin,
      base64_encoded: false,
      wait: false,
    });

    const token = submitResponse.data.token;

    // Step 2: Poll Judge0 for execution status
    let result = null;
    let attempts = 0;
    const maxAttempts = 30; // Timeout after 30 seconds

    while (!result && attempts < maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
      const statusResponse = await axios.get(`${process.env.JUDGE0_API_URL}/submissions/${token}`, {
        params: { base64_encoded: false },
      });

      const { status, stdout, stderr, compile_output, memory, time } = statusResponse.data;

      if (status.id > 2) {
        result = {
          stdout: stdout || null,
          stderr: stderr || null,
          compile_output: compile_output || null,
          status: status.description,
          memory: memory ? `${memory} KB` : undefined,
          time: time ? `${time} s` : undefined,
        };
      }

      attempts++;
    }

    if (!result) {
      return res.status(500).json({ error: "Timeout: Execution took too long" });
    }

    // Step 3: Save the submission to the database
    const submission = await db.submission.create({
      data: {
        userId,
        problemId,
        sourceCode: source_code,
        language: getLanguageName(language_id), // Map language ID to name
        stdin: stdin || null,
        stdout: result.stdout || null,
        stderr: result.stderr || null,
        compileOutput: result.compile_output || null,
        status: result.status,
        memory: result.memory,
        time: result.time,
      },
    });

    // Step 4: If the status is "Accepted", mark the problem as solved
    if (result.status === "Accepted") {
      await db.problemSolved.upsert({
        where: { userId_problemId: { userId, problemId } },
        update: {}, // No updates needed if the record already exists
        create: { userId, problemId ,   },
      });
    }

    // Step 5: Return the result to the frontend
    res.status(200).json({
      success: true,
      message: "Code executed successfully",
      submission,
    });
  } catch (error) {
    console.error("Error executing code:", error.message);
    res.status(500).json({ error: "Failed to execute code" });
  }
};

// Helper function to map Judge0 language IDs to names
function getLanguageName(languageId) {
  const LANGUAGE_NAMES = {
    74: "TypeScript",
    63: "JavaScript",
    71: "Python",
    62: "Java",
  };
  return LANGUAGE_NAMES[languageId] || "Unknown";
}