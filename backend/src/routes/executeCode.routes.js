import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { executeCode } from "../controllers/executeCode.controller.js";


const router = express.Router();


router.post("/" , authenticate ,executeCode)


export default router;