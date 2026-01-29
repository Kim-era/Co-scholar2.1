import db from "../config/db.js";

// ➕ Add resource
export const addResource = async (req, res) => {
  const { title, subject, type, level, url } = req.body;

  try {
    const [result] = await db.execute(
      `INSERT INTO library_resources
       (title, subject, type, level, url, added_by)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, subject, type, level, url, req.user.id]
    );

    res.status(201).json({
      id: result.insertId,
      title,
      subject,
      type,
      level,
      url,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📚 Get all resources
export const getResources = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM library_resources ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔍 Get one resource
export const getResourceById = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM library_resources WHERE id = ?",
      [req.params.id]
    );

    if (!rows.length) {
      return res.status(404).json({ message: "Resource not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
