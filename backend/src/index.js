import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problems.routes.js";
import executeCodeRoutes from "./routes/executeCode.routes.js"
import playlistRoutes from "./routes/playlist.routes.js"
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/api/v1/auth" , authRoutes);
app.use("/api/v1/problems" , problemRoutes);
app.use("/api/v1/execute-code" , executeCodeRoutes)
app.use("api/v1/playlist" , playlistRoutes)

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});