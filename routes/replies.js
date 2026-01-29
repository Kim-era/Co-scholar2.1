import express from "express";
import {
  getReplies,
  createReply,
} from "../controllers/replyContoller.js";

const router = express.Router();

router.get("/:threadId", getReplies);
router.post("/:threadId", createReply);

export default router;
