//   userData,
//   getAllUsers,
//   getRecentUser,
//   sendMessage,
//   recieveMessage,
import Message from "../models/messageModel.js";
import User from "../models/userModel.js";

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
    const users = await User.find({ _id: { $ne: req.user._id } }).select("-password");
    res.status(200).json({
      message: "All users retrieved successfully",
      users,
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

export const getRecentUser = async (req, res, next) => {};

export const sendMessage = async (req, res, next) => {
  try {
    const { receiverId, message } = req.body;
    const senderId = req.user._id;

    if (!receiverId || !message) {
      return res
        .status(400)
        .json({ message: "Receiver ID and message are required" });
    }

    const newMessage = new Message({
      sender: senderId,
      receiver: receiverId,
      message,
    });

    await newMessage.save();

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
    const { senderId } = req.body;
    const receiverId = req.user._id;

    if (!senderId) {
      return res.status(400).json({ message: "Sender ID is required" });
    }

    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    }).sort({ createdAt });

    res.status(200).json({
      message: "Messages retrieved successfully",
      data: messages,
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};
