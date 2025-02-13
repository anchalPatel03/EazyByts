const express = require("express");
const router = express.Router();
const Project = require("../models/project"); // Ensure this path is correct

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
});

// POST a new project
router.post("/", async (req, res) => {
  const { title, description, technologies, link } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  try {
    const newProject = new Project({ title, description, technologies, link });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Error saving project", error });
  }
});

module.exports = router;
