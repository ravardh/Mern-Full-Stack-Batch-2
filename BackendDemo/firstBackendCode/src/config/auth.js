import jwt from "jsonwebtoken";

const genToken = (userId, res) => {
  const token = jwt.sign({ ID: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  console.log(token);

  res.cookie("IDcard", token, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: true,
    sameSite: "None", //"Strict"
  });
};

export default genToken;
