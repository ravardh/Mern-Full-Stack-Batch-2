import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protect = async (req, res, next) => {
  const token = req.cookies.IdCard;
  
  const UserId= jwt.verify(token, process.env.JWT_SECRET_KEY)

  const user =  await User.findById(UserId.key).select("-password")
    
  req.user = user;
  next();
};
