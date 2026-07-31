import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
dotenv.config();

import projectRouter from "./routes/projectRoutes.js";

connectDB();
connectCloudinary();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);

app.use(express.json());
app.use("/api/projects", projectRouter);

app.get("/", (req, res) => {
  res.send("Portfolio API Running");
});

// Global error handler — always last
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR HANDLER:", err);
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});