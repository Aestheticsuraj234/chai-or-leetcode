import express from "express"
import {register , login, getSubmissions} from "../controllers/auth.controller.js"
import { authenticate } from "../middlewares/auth.middleware.js"

const router = express.Router()


router.post("/login",login)


router.post("/register",register)


router.get("/get-submissions",authenticate , getSubmissions)

export default router;