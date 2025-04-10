import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("I am Backend from author Raj Vardhan lkmndlf;ma;");
});

app.post("/hi", (req, res) => {
  res.send("I am Backend from author Raj Vardhan lkmndlf;ma;");
});

app.listen(5002, () => {
  console.log("Server is Running at port 5002");
});
