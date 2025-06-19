import Message from "../models/messageModel.js";
import User from "../models/userModel.js";
import cloudinary from "../config/cloudinary.js";

export const userData = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({
      message: "User data retrieved successfully",
      user,
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.user._id } }).select(
      "-password"
    );
    res.status(200).json({
      message: "All users retrieved successfully",
      users,
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

export const getRecentUser = async (req, res, next) => {
  try {
    const receiverId = req.params.id;

    const recentUsers = await User.findById(receiverId);

    res.status(200).json({
      message: "Recent users retrieved successfully",
      receiver: recentUsers,
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

export const sendMessage = async (req, res, next) => {
  try {
    const receiverId = req.params.id;
    const message = req.params.message;
    const senderId = req.user._id;

    console.log("Sender ID:", senderId);
    console.log("Receiver ID:", receiverId);
    console.log("Message:", message);

    if (!receiverId || !message) {
      return res
        .status(400)
        .json({ message: "Receiver ID and message are required" });
    }

    const newMessage = await Message.create({
      sender: senderId,
      receiver: receiverId,
      message,
      timestamp: new Date(),
    });

    res.status(201).json({
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

export const recieveMessage = async (req, res, next) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.user._id;

    if (!senderId) {
      const error = new Error("Sender ID is required");
      error.statusCode = 400;
      return next(error);
    }
    if (!receiverId) {
      const error = new Error("Receiver ID is required");
      error.statusCode = 400;
      return next(error);
    }

    const messages =
      (await Message.find({
        $or: [
          { sender: senderId, receiver: receiverId },
          { sender: receiverId, receiver: senderId },
        ],
      })) || [];

    res.status(200).json({
      message: "Messages retrieved successfully",
      data: messages,
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    console.log(name, email);

    const photo = req.file;
    if (!name || !email) {
      const error = new Error("Name and email are required");
      error.statusCode = 400;
      return next(error);
    }
    let result = {};

    if (photo) {
      const b64 = Buffer.from(photo.buffer).toString("base64");
      const dataURI = `data:${photo.mimetype};base64,${b64}`;

      if (!dataURI) {
        const error = new Error("Failed to convert photo to data URI");
        error.statusCode = 500;
        return next(error);
      }
      console.log("Data URI", dataURI.slice(0, 50) + "...");

      result = await cloudinary.uploader.upload(dataURI, {
        folder: "ChattingApp",
        width: 300,
        height: 300,
        crop: "fill",
      });

      if (!result) {
        const error = new Error("Failed to upload photo");
        error.statusCode = 500;
        return next(error);
      }

      console.log("Photo uploaded successfully:", result);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        fullName: name,
        email,
        profilePicture: result.secure_url || req.user.profilePicture,
      },
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    next(error);
  }
};
