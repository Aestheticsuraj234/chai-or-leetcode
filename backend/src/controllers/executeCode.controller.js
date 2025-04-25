import { db } from "../libs/db.js";
import axios from "axios";
import { getLanguageName, pollBatchResults, submitBatch } from "../libs/problem.libs.js";

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

    // Create batch submissions
    const submissions = stdin.map((input, i) => ({
      source_code,
      language_id,
      stdin: input,
      base64_encoded: false,
      wait: false,
    }));

    // Submit all test cases in one batch
    const submitResponse = await submitBatch(submissions);

    const tokens = submitResponse.data.map((res) => res.token);

    // Poll for results
    const results = await pollBatchResults(tokens);

    // Process results for each test case
    const detailedResults = [];
    let allPassed = true;

    results.forEach((result, i) => {
      const stdout = result.stdout?.trim();
      const expected_output = expected_outputs[i]?.trim();
      const passed = stdout === expected_output;

      if (!passed) allPassed = false;

      detailedResults.push({
        testCase: i + 1,
        passed,
        stdout: stdout || null,
        expected: expected_output,
        stderr: result.stderr || null,
        compile_output: result.compile_output || null,
        status: result.status.description,
        memory: result.memory ? `${result.memory} KB` : undefined,
        time: result.time ? `${result.time} s` : undefined,
      });
    });

    // Save submission to DB
    const submission = await db.submission.create({
      data: {
        userId,
        problemId,
        sourceCode: source_code,
        language: getLanguageName(language_id),
        stdin: stdin.join("\n"),
        stdout: JSON.stringify(detailedResults.map((r) => r.stdout)),
        stderr: detailedResults.some((r) => r.stderr)
          ? JSON.stringify(detailedResults.map((r) => r.stderr))
          : null,
        compileOutput: detailedResults.some((r) => r.compile_output)
          ? JSON.stringify(detailedResults.map((r) => r.compile_output))
          : null,
        status: allPassed ? "Accepted" : "Wrong Answer",
        memory: detailedResults.some((r) => r.memory)
          ? JSON.stringify(detailedResults.map((r) => r.memory))
          : null,
        time: detailedResults.some((r) => r.time)
          ? JSON.stringify(detailedResults.map((r) => r.time))
          : null,
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
      detailedResults.map((result, index) =>
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


// Poll batch results

