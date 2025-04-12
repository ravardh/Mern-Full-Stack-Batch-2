import mongoose from "mongoose";
import User from "../models/user.model.js";

export const signupUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    console.log({ name, email, phone, password });

    const user = await User.create({
      name,
      email,
      phone,
      password,
    });

    res.json(user);
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = (req, res) => {
  res.json({ message: "Login Sucessfully" });
};

export const logoutUser = (req, res) => {
  res.json({ message: "Logout Sucessfully" });
};

export const resetUser = (req, res) => {
  res.json({ message: "Password Changed" });
};

export const deleteUser = (req, res) => {
  res.json({ message: "User Removed" });
};
