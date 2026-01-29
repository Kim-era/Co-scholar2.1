import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import db from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import libraryRoutes from "./routes/libraryRoutes.js";
import communityRoutes from "./routes/communityRoutes.js";
import categoriesRoute from './routes/categoriesroutes.js';
import searchRoute from "./routes/search.js";
import repliesRoute from "./routes/replies.js";
import threadsRoute from './routes/threads.js';
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev")); // logs method, path, status

app.use("/api/auth",authRoutes);
app.use('/api/categories', categoriesRoute);
app.use("/api/library", libraryRoutes);
app.use("/api/community", communityRoutes);

// Routes
app.use('/api/threads', threadsRoute);
app.use('/api/replies', repliesRoute);
app.use('/api/search', searchRoute);
// routes
app.get("/", (req, res) => {
  res.send("Co-scholar2.1 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// safe DB init (DO NOT redeclare db)
(async () => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ DB ready");
  } catch (err) {
    console.error("❌ DB init failed:", err.message);
  }
})();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
