import express from "express";
import authRoute from "./src/router/auth.routes.js";

const app = express();

const middleware1 = (req, res, next) => {
  console.log("I am middle ware 1");
  next();
};

const middleware2 = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(middleware2);

app.use("/api/auth", authRoute);

app.get("/", middleware1, (req, res) => {
  res.json({ message: "Backend is running" });
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
