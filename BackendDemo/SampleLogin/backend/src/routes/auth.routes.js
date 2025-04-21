import express from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
} from "../controller/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.post("/logout", protect, logoutUser);

router.post("/update", protect, updateUser);

router.get("/user", protect, getUser);

export default router;
