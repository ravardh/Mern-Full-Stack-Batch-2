import express from "express";
import {
  login,
  logout,
  signup,
  update,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

verifyToken

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update",verifyToken, update);

export default router;
