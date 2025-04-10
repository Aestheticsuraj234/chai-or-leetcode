import express from "express";
import { authenticate, checkAdmin } from "../middlewares/auth.middleware.js";
import {
  createProblem,
  getAllProblems,
  getProblemById,
  updateProblem,
  deleteProblem,
} from "../controllers/problem.controller.js";

const router = express.Router();

// Create a new problem (Admin only)
router.post("/create-problem", authenticate, checkAdmin, createProblem);

// Get all problems (Public)
router.get("/get-all-problems", getAllProblems);

// Get a problem by ID (Public)
router.get("/get-problem/:id", getProblemById);

// Update a problem by ID (Admin only)
router.put("/update-problem/:id", authenticate, checkAdmin, updateProblem);

// Delete a problem by ID (Admin only)
router.delete("/delete-problem/:id", authenticate, checkAdmin, deleteProblem);

export default router;