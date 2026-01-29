import db from "../config/db.js";

export const getReplies = async (req, res) => {
  const [rows] = await db.query(
    `SELECT r.*, u.name AS author 
     FROM replies r 
     JOIN users u ON u.id = r.user_id 
     WHERE r.thread_id = ?
     ORDER BY r.created_at ASC`,
    [req.params.threadId]
  );

  res.json(rows);
};

export const createReply = async (req, res) => {
  const { message, user_id, parent_reply_id } = req.body;

  const [result] = await db.query(
    "INSERT INTO replies (thread_id, user_id, parent_reply_id, message) VALUES (?, ?, ?, ?)",
    [req.params.threadId, user_id, parent_reply_id || null, message]
  );

  res.status(201).json({
    id: result.insertId,
    message,
    user_id,
    parent_reply_id,
  });
};