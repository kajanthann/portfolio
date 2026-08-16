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
      usedPercent: (
        ((stats.dataSize + stats.indexSize) / limitBytes) *
        100
      ).toFixed(2),
    });
  } catch (error) {
    console.error("GET DB STATS ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch database stats",
      error: error.message,
    });
  }
};

// Helper: extract owner/repo from a GitHub URL
const parseGithubUrl = (url) => {
  try {
    const cleaned = url
      .trim()
      .replace(/\.git$/, "")
      .replace(/\/$/, "");
    const match = cleaned.match(/github\.com\/([^/]+)\/([^/]+)/i);
    if (!match) return null;
    return { owner: match[1], repo: match[2] };
  } catch {
    return null;
  }
};

// Dependency/config files worth reading for tech-stack detection
const DEPENDENCY_FILES = [
  "package.json",
  "requirements.txt",
  "pyproject.toml",
  "Cargo.toml",
  "pom.xml",
  "build.gradle",
  "go.mod",
  "composer.json",
  "Gemfile",
];

// Fetch raw content of a single file (best-effort, returns "" on failure)
const fetchFileContent = async (owner, repo, path, defaultBranch) => {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${path}`,
    );
    if (!res.ok) return "";
    const text = await res.text();
    return text.slice(0, 1500); // cap size per file
  } catch {
    return "";
  }
};

export const analyzeGithubRepo = async (req, res) => {
  try {
    const { githubUrl } = req.body;

    if (!githubUrl) {
      return res.status(400).json({ message: "GitHub URL is required" });
    }

    const parsed = parseGithubUrl(githubUrl);
    if (!parsed) {
      return res.status(400).json({ message: "Invalid GitHub URL format" });
    }

    const { owner, repo } = parsed;

    // 1. Repo metadata
    const repoRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { headers: { Accept: "application/vnd.github+json" } },
    );

    if (!repoRes.ok) {
      return res.status(404).json({
        message:
          "Could not find this repository. Check the URL or if it's private.",
      });
    }

    const repoData = await repoRes.json();
    const defaultBranch = repoData.default_branch || "main";

    // 2. README
    let readmeText = "";
    try {
      const readmeRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`,
        { headers: { Accept: "application/vnd.github.raw" } },
      );
      if (readmeRes.ok) {
        readmeText = (await readmeRes.text()).slice(0, 4000);
      }
    } catch {
      // ignore
    }

    // 3. Languages
    let languages = [];
    try {
      const langRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/languages`,
      );
      if (langRes.ok) {
        languages = Object.keys(await langRes.json());
      }
    } catch {
      // ignore
    }

    // 4. Full file tree (recursive, paths only — lightweight)
    let filePaths = [];
    try {
      const treeRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/git/trees/${defaultBranch}?recursive=1`,
        { headers: { Accept: "application/vnd.github+json" } },
      );
      if (treeRes.ok) {
        const treeData = await treeRes.json();
        filePaths = (treeData.tree || [])
          .filter((item) => item.type === "blob")
          .map((item) => item.path)
          .slice(0, 300); // cap to avoid huge payloads on big repos
      }
    } catch {
      // ignore
    }

    // 5. Fetch dependency file contents found in the tree (parallel, best-effort)
    const foundDepFiles = filePaths.filter((p) =>
      DEPENDENCY_FILES.includes(p.split("/").pop()),
    );

    const depContents = await Promise.all(
      foundDepFiles.slice(0, 5).map(async (path) => ({
        path,
        content: await fetchFileContent(owner, repo, path, defaultBranch),
      })),
    );

    const depFilesText = depContents
      .filter((d) => d.content)
      .map((d) => `--- ${d.path} ---\n${d.content}`)
      .join("\n\n");

    // 6. Build prompt for the AI
    const prompt = `You are analyzing a GitHub repository to generate a portfolio project entry, in the exact style used on a software engineering student's portfolio website.

Repository name: ${repoData.name}
GitHub description: ${repoData.description || "N/A"}
Topics: ${(repoData.topics || []).join(", ") || "N/A"}
Languages used: ${languages.join(", ") || "N/A"}

File structure (${filePaths.length} files):
${filePaths.join("\n") || "N/A"}

Dependency/config files found:
${depFilesText || "None found"}

README content:
"""
${readmeText || "No README available."}
"""

STYLE GUIDE (follow this exactly, based on real examples from this portfolio):

Example 1:
Description: "CowGuard is a comprehensive IoT solution for real-time monitoring and tracking of livestock (cattle) across farms. It combines GPS tracking, LoRa wireless communication, cloud infrastructure, and intuitive user interfaces to provide farmers with complete visibility over their herds, including geofencing alerts and location history."
Tags: ["IoT", "ESP32", "LoRa", "Firmware", "GPS", "Embedded System", "MQTT"]

Example 2:
Description: "Smart Spider is a MERN-stack business management platform designed for electronics shops and repair centers to efficiently manage inventory, sales, and device repair operations."
Tags: ["MERN Stack", "Inventory Management", "POS System", "REST API"]

Example 3:
Description: "A smart accident detection system using multi-sensor fusion and edge machine learning on a Raspberry Pi to automatically detect road accidents and trigger real-time GPS-based alerts to emergency contacts."
Tags: ["Embedded Systems", "IoT", "Machine Learning", "Computer Vision", "Sensor Fusion", "Raspberry Pi", "GPS Tracking", "MQTT"]

Example 4:
Description: "MatchMyStuff is an AI-powered lost-and-found platform that uses vector embeddings to semantically match lost item reports with found item listings, built for a hackathon."
Tags: ["MERN Stack", "AI", "Computer Vision", "Convex", "Vector Embeddings"]

Rules for the description:
- Must be 80 to 100 words, no more, no less. Count your words before finalizing.
- Open with the project name, then state what it IS (its category/domain) and WHO it's for or WHAT problem it solves.
- Use the remaining words to mention 1-2 standout technical features or architecture details.
- No marketing fluff like "seamless user experience", "state-of-the-art", "modern web technologies" as filler - use every word to convey real information.

Rules for tags:
- Tags are pure tech/stack/keyword labels only - each tag is a specific technology, framework, protocol, hardware component, or technical concept (e.g. "ESP32", "LoRa", "MQTT", "MERN Stack", "Vector Embeddings", "Sensor Fusion", "Computer Vision", "REST API", "POS System", "Convex", "TensorFlow Lite", "Firmware").
- Do NOT include generic language names like "JavaScript", "HTML", "CSS", "Python" as standalone tags unless truly nothing more specific applies.
- Do NOT include vague descriptive words like "Real-time", "Secure", "Modern", "Scalable" as tags - only concrete named technologies or well-defined technical concepts.
- Prefer stack-level tags over listing every individual piece (e.g. "MERN Stack" instead of separately listing React, Express.js, MongoDB, Node.js).
- Number of tags should match the project's actual technical depth - do not pad with filler tags to hit a count, and do not omit a relevant technology to stay short. Typically this lands between 4 and 10 tags, driven entirely by what's genuinely present in the dependency files, file structure, and README.
- Order tags from most defining/important (the core domain or platform) to more specific/supporting technologies.

Respond ONLY with valid JSON in this exact format, no markdown, no extra text:
{"desc": "...", "tags": ["tag1", "tag2", "tag3", "..."]}`;

    // 7. Call Groq API
    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: prompt }],
          response_format: { type: "json_object" },
          temperature: 0.4,
          max_tokens: 600,
        }),
      },
    );

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("GROQ API ERROR:", errText);
      return res.status(502).json({ message: "AI analysis failed, try again" });
    }

    const groqData = await groqRes.json();
    const aiContent = groqData.choices?.[0]?.message?.content;

    if (!aiContent) {
      return res.status(502).json({ message: "AI returned no content" });
    }

    let parsedResult;
    try {
      parsedResult = JSON.parse(aiContent);
    } catch {
      return res.status(502).json({ message: "AI returned invalid format" });
    }

    res.status(200).json({
      desc: parsedResult.desc || "",
      tags: Array.isArray(parsedResult.tags) ? parsedResult.tags : [],
    });
  } catch (error) {
    console.error("ANALYZE GITHUB REPO ERROR:", error);
    res.status(500).json({
      message: "Failed to analyze repository",
      error: error.message,
    });
  }
};