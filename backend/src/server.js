// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
dotenv.config();

const app = express()
const __dirname = path.resolve()

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});
    
app.listen(PORT,() => console.log("Server is running on port: "+ PORT));