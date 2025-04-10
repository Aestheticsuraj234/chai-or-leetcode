import { db } from '../libs/db.js';
import axios from 'axios';
import { getJudge0LanguageId, getJudge0Result } from '../libs/problem.libs.js';

export const createProblem = async (req, res) => {
  const {
    title,
    description,
    difficulty,
    tags,
    examples,
    constraints,
    testCases,
    codeSnippets,
    referenceSolutions,
  } = req.body;

  if (req.user.role !== 'ADMIN') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Step 1: Validate each reference solution using testCases
    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      const languageId = getJudge0LanguageId(language);
      if (!languageId) {
        return res
          .status(400)
          .json({ error: `Unsupported language: ${language}` });
      }

      // Run all test cases individually
      for (const testCase of testCases) {
        const { input, output: expected_output } = testCase;

        const submissionPayload = {
          source_code: solutionCode,
          language_id: languageId,
          stdin: input,
          expected_output: expected_output,
        };

        const submitResponse = await axios.post(
          `${process.env.JUDGE0_API_URL}/submissions`,
          submissionPayload
        );
        const token = submitResponse.data.token;
        const result = await getJudge0Result(token);

        console.log(`Result for ${language} on input "${input}":`, result);

        if (result.status.id !== 3) {
          return res.status(400).json({
            error: `Validation failed for ${language} on input: ${input}`,
            details: result,
          });
        }
      }
    }

    // Step 2: Save the problem to the database
    const newProblem = await db.problem.create({
      data: {
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        testCases,
        codeSnippets,
        referenceSolutions,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Problem created successfully',
      problem: newProblem,
    });
  } catch (error) {
    console.error('Error creating problem:', error);
    res.status(500).json({ error: 'Failed to create problem' });
  }
};

export const getAllProblems = async (req, res) => {
  try {
    const problems = await db.problem.findMany();
    res.status(200).json({
      success: true,
      message: 'Problems fetched successfully',
      problems,
    });
  } catch (error) {
    console.error('Error fetching problems:', error);
    res.status(500).json({ error: 'Failed to fetch problems' });
  }
};

export const getProblemById = async (req, res) => {
  const { id } = req.params;

  try {
    const problem = await db.problem.findUnique({ where: { id } });
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Problem fetched successfully',
      problem,
    });
  } catch (error) {
    console.error('Error fetching problem:', error);
    res.status(500).json({ error: 'Failed to fetch problem' });
  }
};

export const updateProblem = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      difficulty,
      tags,
      examples,
      constraints,
      testCases,
      codeSnippets,
      referenceSolutions,
    } = req.body;

    const problem = await db.problem.findUnique({ where: { id } });
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }

    // Step 1: Validate each reference solution using testCases
    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      const languageId = getJudge0LanguageId(language);
      if (!languageId) {
        return res
          .status(400)
          .json({ error: `Unsupported language: ${language}` });
      }

      // Run all test cases individually
      for (const testCase of testCases) {
        const { input, output: expected_output } = testCase;

        const submissionPayload = {
          source_code: solutionCode,
          language_id: languageId,
          stdin: input,
          expected_output: expected_output,
        };

        const submitResponse = await axios.post(
          `${process.env.JUDGE0_API_URL}/submissions`,
          submissionPayload
        );
        const token = submitResponse.data.token;
        const result = await getJudge0Result(token);

        console.log(`Result for ${language} on input "${input}":`, result);

        if (result.status.id !== 3) {
          return res.status(400).json({
            error: `Validation failed for ${language} on input: ${input}`,
            details: result,
          });
        }
      }
    }

    // Run all test cases individually
    // Step 2: Save the updated problem to the database

    const updatedProblem = await db.problem.update({
      where: { id },
      data: {
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        testCases,
        codeSnippets,
        referenceSolutions,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Problem updated successfully',
      problem: updatedProblem,
    });
  } catch (error) {
    console.error('Error creating problem:', error);
    res.status(500).json({ error: 'Failed to update problem' });
  }
};

export const deleteProblem = async (req, res) => {
  try {
    const { id } = req.params;

    const problem = await db.problem.findUnique({ where: { id } });

    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }

    await db.problem.delete({ where: { id } });

    res.status(200).json({
      success: true,
      message: 'Problem deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting problem:', error);
  }
};
