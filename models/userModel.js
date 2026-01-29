import db from "../config/db";

exports.createUser = (email,password,role) => {
  const sql = "INSERT INTO users (name, email,role) VALUES (?, ?)";
  return db.execute(sql, [email,password,role]);
};

exports.getAllUsers = () => {
  const sql = "SELECT * FROM users";
  return db.execute(sql);
};
