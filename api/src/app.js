import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { corsOptions } from "./config/cors.config.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import apiRoutes from "./routes/index.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions()));

// API Routes
app.use("/api", apiRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;
