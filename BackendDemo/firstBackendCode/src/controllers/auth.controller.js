import genToken from "../config/auth.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { name, email, password, phone } = req.body;

  console.log(name, email, password, phone);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
  });

  res.json({ message: "User Signup Sucessfull", user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  const user = await User.find({ email });

  let message;

  if (user[0]) {
    const isMatch = await bcrypt.compare(password, user[0].password);

    console.log(isMatch);

    if (isMatch) {
      message = "User Login Sucessfull";
      genToken(user[0]._id, res);
    } else {
      message = "Invalid Username or Password";
    }
  } else {
    message = "Invalid Username or Password";
  }

  res.json({ message: message });
};

export const logout = (req, res) => {
  res.json({ message: "User Logout Sucessfull" });
};

export const update = async (req, res) => {
  try {
    const { email, name, phone } = req.body;

    const user = await User.find({ email });

    if (!user[0]) {
      throw new error("User not Found");
    }

    const updatedUser = await User.findByIdAndUpdate(
      { _id: user[0]._id },
      { name, phone },
      { new: true }
    );

    res.json({ message: "User upodated Sucessfull", updatedUser });
  } catch (e) {
    console.log(e);
  }
};
