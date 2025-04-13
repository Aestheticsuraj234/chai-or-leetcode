import { db } from "../libs/db.js";
import axios from "axios";

// Main function to execute the code
export const executeCode = async (req, res) => {
  const { source_code, language_id, stdin, expected_outputs, problemId } = req.body;
  const userId = req.user.id;

  try {
    // Validate input
    if (
      !Array.isArray(stdin) ||
      stdin.length === 0 ||
      !Array.isArray(expected_outputs) ||
      expected_outputs.length !== stdin.length
    ) {
      return res.status(400).json({ error: "Invalid or missing test cases" });
    }

 

    const results = [];
    let allPassed = true;

    // Loop through each test case
    for (let i = 0; i < stdin.length; i++) {
      const input = stdin[i];

      const submitResponse = await axios.post(
        `${process.env.JUDGE0_API_URL}/submissions`,
        {
          source_code: source_code, // Send modified code
          language_id,
          stdin: input, // Standard input
          base64_encoded: false,
          wait: false,
        }
      );

      const token = submitResponse.data.token;
      let result = null;
      let attempts = 0;
      const maxAttempts = 30;

      // Poll for result
      while (!result && attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const statusResponse = await axios.get(
          `${process.env.JUDGE0_API_URL}/submissions/${token}`,
          {
            params: { base64_encoded: false },
          }
        );

        const {
          status,
          stdout,
          stderr,
          compile_output,
          memory,
          time,
        } = statusResponse.data;

        if (status.id > 2) {
          const expected_output = expected_outputs[i]?.trim();
          const passed = stdout?.trim() === expected_output;

          if (!passed) allPassed = false;

          result = {
            testCase: i + 1,
            passed,
            stdout: stdout || null,
            expected: expected_output,
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
        return res.status(500).json({ error: `Timeout on test case ${i + 1}` });
      }

      results.push(result);
    }

    // Save submission to DB
    const submission = await db.submission.create({
      data: {
        userId,
        problemId,
        sourceCode: source_code,
        language: getLanguageName(language_id),
        stdin: stdin.join("\n"),
        stdout: JSON.stringify(results.map((r) => r.stdout)),
        stderr: results.some((r) => r.stderr) ? JSON.stringify(results.map((r) => r.stderr)) : null,
        compileOutput: results.some((r) => r.compile_output)
          ? JSON.stringify(results.map((r) => r.compile_output))
          : null,
        status: allPassed ? "Accepted" : "Wrong Answer",
        memory: results.some((r) => r.memory) ? JSON.stringify(results.map((r) => r.memory)) : null,
        time: results.some((r) => r.time) ? JSON.stringify(results.map((r) => r.time)) : null,
      },
    });

    // Track problems solved
    if (allPassed) {
      await db.problemSolved.upsert({
        where: {
          userId_problemId: {
            userId,
            problemId,
          },
        },
        update: {},
        create: {
          userId,
          problemId,
        },
      });
    }

    // Store individual test case results
    await Promise.all(
      results.map((result, index) =>
        db.testCaseResult.create({
          data: {
            submissionId: submission.id,
            testCase: index + 1,
            passed: result.stdout?.trim() === expected_outputs[index]?.trim(),
            stdout: result.stdout,
            expected: expected_outputs[index],
            stderr: result.stderr,
            compileOutput: result.compile_output,
            status: result.status,
            memory: result.memory,
            time: result.time,
          },
        })
      )
    );

    // Fetch submission with test cases
    const submissionWithTestCases = await db.submission.findUnique({
      where: { id: submission.id },
      include: {
        testCases: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Code executed successfully",
      submission: submissionWithTestCases,
    });
  } catch (error) {
    console.error("Error executing code:", error.message);
    res.status(500).json({ error: "Failed to execute code" });
  }
};

// Map language ID to readable name
function getLanguageName(languageId) {
  const LANGUAGE_NAMES = {
    74: "TypeScript",
    63: "JavaScript",
    71: "Python",
    62: "Java",
  };
  return LANGUAGE_NAMES[languageId] || "Unknown";
}

