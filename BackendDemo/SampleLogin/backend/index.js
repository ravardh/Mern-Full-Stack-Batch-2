import express from "express"
import connectDB from "./src/config/db.js";
const app = express();


app.get("/",(req,res)=>{
    res.json({message:"Backend Connected"})
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Sever Started at Port",port);
    connectDB();
})