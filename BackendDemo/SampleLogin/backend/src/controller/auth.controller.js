import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import genToken from "../config/auth.js";

export const signupUser = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;
    let { profilePhoto } = req.body;

    if (!name || !email || !phone || !password) {
      let error = new Error("All Feilds Required");
      error.StatusCode = 400;
      return next(error);
    }

    if (!profilePhoto) {
      const Nc = name.charAt(0);
      profilePhoto = `https://placehold.co/400X400?text=${Nc}`;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const previousUser = await User.find({ email });

    if (previousUser[0]) {
      let error = new Error("User already Exists");
      error.StatusCode = 409;
      return next(error);
    }

    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      profilePhoto,
    });

    
    res.status(201).json({ message: ` Welcome ${newUser.name} !!! ` });
  } catch (e) {
    next(e);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      let error = new Error("All Feilds Required");
      error.StatusCode = 400;
      return next(error);
    }

    const user = await User.find({ email });

    if (!user[0]) {
      let error = new Error("Inavild Email/Password");
      error.StatusCode = 404;
      return next(error);
    }

    const verifyPassword = await bcrypt.compare(password, user[0].password);

    if (!verifyPassword) {
      let error = new Error("Inavild Email/Password");
      error.StatusCode = 404;
      return next(error);
    }

    const Token = genToken(user[0]._id, res);

    res.status(200).json({ message: `welcome Back ${user[0].name}`, Token });
  } catch (e) {
    next(e);
  }
};

export const logoutUser = (req, res) => {
  console.log(req.user);
  res.cookie("IdCard", "");
  res.status(200).json({ message: `See you Soon ${req.user.name} . . . ` });
};

export const getUser = (req, res) => {
  console.log(req.user);

  res.status(200).json(req.user);
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, phone, profilePhoto } = req.body;
    const user = req.user;

    if (!name || !phone || !profilePhoto) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { name, phone, profilePhoto },
      { new: true }
    );

    if (!updatedUser) {
      const error = new Error("Update Unsuccessful");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({ message: "Update Successful", updatedUser });
  } catch (e) {
    next(e);
  }
};

