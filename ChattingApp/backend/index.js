import express from "express";
import connectDB from "./src/config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Server is Connected",
    status: "success",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
