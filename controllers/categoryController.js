import db from "../config/db.js";; // your MySQL connection

export const getCategories = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM categories");
  res.json(rows);
};

  