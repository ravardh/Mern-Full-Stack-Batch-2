import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const signupUser = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      let error = new Error("All Feilds Required");
      error.StatusCode = 400;
      next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const previousUser = await User.find({ email });

    if (previousUser[0]) {
      let error = new Error("User already Exists");
      error.StatusCode = 409;
      next(error);
    }

    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(200).json({ message: ` Welcome ${newUser.name} !!! ` });
  } catch (e) {
    next(e);
  }
};

export const loginUser = (req, res) => {
  console.log("login");
};

export const logoutUser = (req, res) => {
  console.log("logout");
};
