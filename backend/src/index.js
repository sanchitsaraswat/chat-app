import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// CORS FIX
app.use(cors({
  origin: "https://chat-h9n0s2zxm-sanchit-saraswats-projects.vercel.app",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// START SERVER
server.listen(PORT, () => {
  console.log("server running on PORT:", PORT);
  connectDB();
});