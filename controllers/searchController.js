import db from "../config/db.js";

export const searchThreads= async (req, res)=> {
  const { q } = req.query;
  try {
    const [rows] = await db.query(
      `SELECT t.*, u.name AS author 
       FROM threads t 
       JOIN users u ON t.user_id = u.id
       WHERE t.title LIKE ?`,
      [`%${q}%`]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

