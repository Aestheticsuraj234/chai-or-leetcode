import express from "express";
import { authenticate, checkAdmin } from "../middlewares/auth.middleware.js";
import {
  createProblem,
  getAllProblems,
  getProblemById,
  updateProblem,
  deleteProblem,
  getAllProblemsSolvedByUser,
} from "../controllers/problem.controller.js";

const router = express.Router();

// Create a new problem (Admin only)
router.post("/create-problem", authenticate, checkAdmin, createProblem);

// Get all problems (Public)
router.get("/get-all-problems", authenticate , getAllProblems);

// Get a problem by ID (Public)
router.get("/get-problem/:id", getProblemById);

// Update a problem by ID (Admin only) put is used TO UPDATE ALL FIELDS AND PATCH IS USED TO UPDATE SPECIFIC FIELDS ONLY
router.put("/update-problem/:id", authenticate, checkAdmin, updateProblem);

// Delete a problem by ID (Admin only)
router.delete("/delete-problem/:id", authenticate, checkAdmin, deleteProblem);

router.get("/get-solved-problem" , authenticate , getAllProblemsSolvedByUser)

export default router;