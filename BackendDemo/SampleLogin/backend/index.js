import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend Connected" });
});

app.use((err, req, res, next) => {
  const errorCode = err.StatusCode || 500;
  const errorMessage = err.message || "Internal Server Error";

  res.status(errorCode).json({ message: errorMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Sever Started at Port", port);
  connectDB();
});
