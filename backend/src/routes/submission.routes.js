import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { getAllSubmissions, getAllTheSubmissionsForProblem, getSubmissionsForProblem } from "../controllers/submission.controller.js";

const router = express.Router();



router.get("/get-all-submissions" , authenticate , getAllSubmissions)

router.get("/get-submissions/:problemId" , authenticate , getSubmissionsForProblem)

router.get("/get-submissions-count/:problemId" , authenticate , getAllTheSubmissionsForProblem)




export default router;