import express from "express";
import authRoute from "./src/router/auth.routes.js";

const app = express();


const middleware2 = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};


app.use(middleware2);

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running at port",port);
});
