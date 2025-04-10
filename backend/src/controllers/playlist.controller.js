import { db } from "../libs/db.js";


export const createPlayList = async (req, res) => {
    try {
        const {name , description} = req.body;
        const userId = req.user.id;

        const playList = await db.playlist.create({
            data: {
                name,
                description,
                userId
            }
        })
        res.status(200).json({
            success: true,
            message: 'Playlist created successfully',
            playList
        });

    } catch (error) {
        
    }
}

export const getPlayListDetails = async ( req , res)=>{
    const {playlistId} = req.params;

    try {
        const playList = await db.playList.findUnique({
            where:{
                id:playlistId
            },
            include:{
                problems:{
                    include: {
                        problem: true
                    }
                }
            }
            
        })

        if(!playList){
            return res.status(404).json({ error: 'Playlist not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Playlist fetched successfully',
            playList
        })
    } catch (error) {
        console.error('Error fetching playlist:', error);
        res.status(500).json({ error: 'Failed to fetch playlist' });
    }
}


export const addProblemToPlaylist = async (req, res) => {
    const { playlistId } = req.params;
    const { problemIds } = req.body; // Accept an array of problem IDs
  
    try {
      // Ensure problemIds is an array
      if (!Array.isArray(problemIds) || problemIds.length === 0) {
        return res.status(400).json({ error: "Invalid or missing problemIds" });
      }
  
      // Create records for each problem in the playlist
      const problemsInPlaylist = await db.problemInPlaylist.createMany({
        data: problemIds.map((problemId) => ({
          playlistId,
          problemId,
        })),
      });
  
      res.status(201).json({
        success: true,
        message: "Problems added to playlist successfully",
        problemsInPlaylist,
      });
    } catch (error) {
      console.error("Error adding problems to playlist:", error.message);
      res.status(500).json({ error: "Failed to add problems to playlist" });
    }
  };


  export const deletePlayList = async (req, res) => {
    const { playlistId } = req.params;
  
    try {
      const deletedPlaylist = await db.playlist.delete({
        where: {
          id: playlistId,
        },
      });
  
      res.status(200).json({
        success: true,
        message: "Playlist deleted successfully",
        deletedPlaylist,
      });
    } catch (error) {
      console.error("Error deleting playlist:", error.message);
      res.status(500).json({ error: "Failed to delete playlist" });
    }
  };


  export const removeProblemFromPlaylist = async (req, res) => {
    const { playlistId, problemId } = req.params;
  
    try {
      const deletedProblem = await db.problemInPlaylist.delete({
        where: {
          playlistId_problemId: {
            playlistId,
            problemId,
          },
        },
      });
  
      res.status(200).json({
        success: true,
        message: "Problem removed from playlist successfully",
        deletedProblem,
      });
    } catch (error) {
      console.error("Error removing problem from playlist:", error.message);            
      res.status(500).json({ error: "Failed to remove problem from playlist" });
    }
  };