import express from "express";
import db from "../config/db.js";

const router = express.Router();

// ✅ Get all posts
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM community_posts ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ Submit a new post (bare minimum)
router.post("/", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    await db.query("INSERT INTO community_posts (title, content) VALUES (?, ?)", [
      title,
      content,
    ]);
    res.status(201).json({ message: "Post submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

export default router;
