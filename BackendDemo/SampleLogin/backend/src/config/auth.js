import jwt from "jsonwebtoken";

const genToken = (userId, res) => {
  const token = jwt.sign({ key: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res.cookie("IdCard", token, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  return token;
};

export default genToken;
