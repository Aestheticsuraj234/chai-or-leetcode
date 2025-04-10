import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { addProblemToPlaylist, createPlayList, deletePlayList, getPlayAllListDetails, getPlayListDetails, removeProblemFromPlaylist } from "../controllers/playlist.controller.js";

const router = express.Router();

router.get("/" , authenticate , getPlayAllListDetails)

router.get("/:playlistId" , authenticate , getPlayListDetails)

router.post("/create-playlist" ,authenticate ,  createPlayList)



router.post('/:playlistId/add-problem' , authenticate , addProblemToPlaylist)

router.delete("/:playlistId" , authenticate , deletePlayList)

router.delete("/:playlistId/remove-problem" , authenticate , removeProblemFromPlaylist)


export default router;