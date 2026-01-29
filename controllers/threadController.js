import db from "../config/db.js";

export const getThreads = async (req, res) => {
  const { category } = req.query;

  let sql = `
    SELECT t.id, t.title, COUNT(r.id) AS replies, u.name AS author
    FROM threads t
    LEFT JOIN replies r ON r.thread_id = t.id
    JOIN users u ON u.id = t.user_id
  `;
  const params = [];

  if (category) {
    sql += " WHERE t.category_id = ?";
    params.push(category);
  }

  sql += " GROUP BY t.id ORDER BY t.created_at DESC";

  const [rows] = await db.query(sql, params);
  res.json(rows);
};

export const getThreadById = async (req, res) => {
  const [rows] = await db.query(
    "SELECT t.*, u.name AS author FROM threads t JOIN users u ON u.id = t.user_id WHERE t.id = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const createThread = async (req, res) => {
  const { title, category_id, user_id } = req.body;

  const [result] = await db.query(
    "INSERT INTO threads (title, category_id, user_id) VALUES (?, ?, ?)",
    [title, category_id, user_id]
  );

  res.status(201).json({
    id: result.insertId,
    title,
    category_id,
    user_id,
    replies: 0,
  });
};
