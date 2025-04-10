import express from "express";
import authRoute from "./src/router/auth.routes.js"

const app = express();


app.use("/api/auth", authRoute)



app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});


app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
