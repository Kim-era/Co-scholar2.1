import db from "../config/db.js";

export const createResource = async (data, userId) => {
  const { title, subject, type, level, url } = data;

  const [result] = await db.execute(
    `INSERT INTO library_resources
     (title, subject, type, level, url, added_by)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [title, subject, type, level, url, userId]
  );

  return result.insertId;
};

export const getAllResources = async () => {
  const [rows] = await db.execute(
    "SELECT * FROM library_resources ORDER BY created_at DESC"
  );
  return rows;
};

export const getResourceById = async (id) => {
  const [rows] = await db.execute(
    "SELECT * FROM library_resources WHERE id = ?",
    [id]
  );
  return rows[0];
};
