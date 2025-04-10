import express from "express"
import {register , login, getSubmissions, getUserPlaylists, logout, checkAuth} from "../controllers/auth.controller.js"
import { authenticate } from "../middlewares/auth.middleware.js"

const router = express.Router()


router.get("/check" , authenticate , checkAuth);

router.post("/login",login)


router.post("/register",register)

router.post("/logout" ,  logout)


router.get("/get-submissions",authenticate , getSubmissions)

router.get("/get-playlists" , authenticate , getUserPlaylists)

export default router;