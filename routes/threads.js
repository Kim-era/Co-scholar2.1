import express from "express";
import {
  getThreads,
  getThreadById,
  createThread,
} from "../controllers/threadController.js";

const router = express.Router();

router.get("/", getThreads);
router.get("/:id", getThreadById);
router.post("/", createThread);

export default router;
