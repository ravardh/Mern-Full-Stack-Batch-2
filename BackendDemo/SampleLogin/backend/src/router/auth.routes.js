import express from "express";
import {
  deleteUser,
  loginUser,
  logoutUser,
  resetUser,
  signupUser,
} from "../controller/auth.controller.js";

loginUser;

const router = express.Router();

router.post("/signup",signupUser)

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.put("/resetPassword", resetUser);

router.delete("/removeUser", deleteUser);

export default router;
