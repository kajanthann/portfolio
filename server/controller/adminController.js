import ProjectModel from "../models/project.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign(
      {
        email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.error("GET PROJECTS ERROR:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch projects", error: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error("GET PROJECT BY ID ERROR:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch project", error: error.message });
  }
};

// CREATE PROJECT
export const createProject = async (req, res) => {
  try {
    console.log("CREATE PROJECT - req.body:", req.body);
    console.log("CREATE PROJECT - req.file:", req.file);

    if (!req.file) {
      console.error("CREATE PROJECT ERROR: No file received by multer");
      return res.status(400).json({
        message: "No image file uploaded",
      });
    }

    const project = await ProjectModel.create({
      title: req.body.title,
      image: req.file.path,
      imagePublicId: req.file.filename,
      desc: req.body.desc,
      tags: JSON.parse(req.body.tags),
      status: req.body.status,
      github: req.body.github || "https://github.com/kajanthann",
      demo: req.body.demo,
    });

    res.status(201).json(project);
  } catch (error) {
    console.error("CREATE PROJECT ERROR:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      desc: req.body.desc,
      status: req.body.status,
      github: req.body.github || "",
      demo: req.body.demo || "",
    };

    // Only parse & update tags if it was sent
    if (req.body.tags) {
      try {
        updateData.tags = JSON.parse(req.body.tags);
      } catch (parseErr) {
        return res.status(400).json({
          message: "Invalid tags format, expected a JSON array string",
        });
      }
    }

    // Only update image fields if a new file was uploaded
    if (req.file) {
      updateData.image = req.file.path;
      updateData.imagePublicId = req.file.filename;
    }

    const project = await ProjectModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    console.error("UPDATE PROJECT ERROR:", error);
    res.status(400).json({
      message: "Failed to update project",
      error: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await ProjectModel.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("DELETE PROJECT ERROR:", error);
    res.status(500).json({
      message: "Failed to delete project",
      error: error.message,
    });
  }
};

export const getDbStats = async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const stats = await db.stats();

    // Atlas free tier (M0) limit is 512MB — adjust if you're on a paid tier
    const limitBytes = 512 * 1024 * 1024;

    res.status(200).json({
      dataSize: stats.dataSize,
      storageSize: stats.storageSize,
      indexSize: stats.indexSize,
      totalSize: stats.dataSize + stats.indexSize,
      collections: stats.collections,
      objects: stats.objects,
      limitBytes,
      usedPercent: (((stats.dataSize + stats.indexSize) / limitBytes) * 100).toFixed(2),
    });
  } catch (error) {
    console.error("GET DB STATS ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch database stats",
      error: error.message,
    });
  }
};