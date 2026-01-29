import express from "express";
import {
  addResource,
  getResources,
  getResourceById,
} from "../controllers/libraryController.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getResources);
router.get("/:id", getResourceById);

// Protected
router.post("/", protect, addResource);

export default router;
