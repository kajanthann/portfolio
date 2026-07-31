import express from "express";

import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  login,
} from "../controller/adminController.js";
import authMiddleware from "../middleware/adminAuth.js";
import upload from "../middleware/upload.js";

const postRouter = express.Router();

postRouter.post("/login", login);

postRouter.get("/all-projects", getProjects);
postRouter.get("/:id", authMiddleware, getProjectById);
postRouter.post("/create", authMiddleware, upload.single("image"), createProject);
postRouter.put("/:id", authMiddleware, upload.single("image"), updateProject);
postRouter.delete("/:id", authMiddleware, deleteProject);

export default postRouter;