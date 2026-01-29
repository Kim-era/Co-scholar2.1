import db from "../config/db.js";

export const createPost = async (data, author) => {
  const { title, content, category, tags } = data;
  const { id: author_id, name: author_name } = author || {};

  const [result] = await db.execute(
    `INSERT INTO community_posts
      (title, content, category, tags, author_id, author_name)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [title, content, category, tags, author_id, author_name]
  );

  return result.insertId;
};

export const getAllPosts = async () => {
  const [rows] = await db.execute(
    "SELECT * FROM community_posts ORDER BY created_at DESC"
  );
  return rows;
};

export const getPostsByCategory = async category => {
  const [rows] = await db.execute(
    "SELECT * FROM community_posts WHERE category = ? ORDER BY created_at DESC",
    [category]
  );
  return rows;
};
