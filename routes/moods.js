import express from "express";
import { db } from "../db.js";
import { getAIResponse } from "../services/aiService.js";

const router = express.Router();

// POST new mood
router.post("/", async (req, res) => {
  const { full_name, mood_text } = req.body;

  if (!mood_text || !full_name) {
    return res.status(400).json({ error: "Name and mood are required" });
  }

  try {
    // 1. Generate AI response based on mood_text
    const ai_message = getAIResponse(mood_text);

    // 2. Insert into database
    await db.query(
      "INSERT INTO moods (full_name, mood_text, ai_message) VALUES (?, ?, ?)",
      [full_name, mood_text, ai_message]
    );

    // 3. Return AI message in consistent key
    res.json({ ai_message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// GET all moods
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM moods ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

export default router;
