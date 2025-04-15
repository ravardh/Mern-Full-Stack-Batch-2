import express from "express";
import authRouter from "./src/routes/auth.route.js";
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  {
    res.json({ message: "Server Working" });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Running", port);
  connectDB();
});
