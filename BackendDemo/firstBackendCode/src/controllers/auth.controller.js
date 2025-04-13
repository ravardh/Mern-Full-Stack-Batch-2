import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { name, email, password, phone } = req.body;

  console.log(name, email, password, phone);

  const user = await User.create({ name, email, password, phone });

  res.json({ message: "User Signup Sucessfull" , user});
};

export const login = (req, res) => {
  res.json({ message: "User Login Sucessfull" });
};

export const logout = (req, res) => {
  res.json({ message: "User Logout Sucessfull" });
};
