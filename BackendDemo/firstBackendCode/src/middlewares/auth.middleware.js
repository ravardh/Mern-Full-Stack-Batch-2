import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    console.log(req.cookies);
    next();
  } catch (e) {
    console.log(e);
  }
};
