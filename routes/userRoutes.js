import express from "express";
const router = express.Router();
import userController from "../controllers/userController";

router.post("/", userController.createUser);
router.get("/", userController.getUsers);

export default router;
