import express from "express";
import { signup, signin } from"../controllers/auth.controller.js";
import { protect, teacherOnly } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);


router.get("/dashboard", protect, (req, res) => {
  res.json({ message: "Welcome to dashboard" });
});

router.post("/create-course", protect, teacherOnly, (req, res) => {
  res.json({ message: "Course created" });
});


export default router;

