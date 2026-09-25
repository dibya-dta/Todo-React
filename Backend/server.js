import express from 'express';
import { connectDB } from './config/connectDB.js';
import { configDotenv } from 'dotenv';

const app = express();
const Port = 3000;
configDotenv();




app.get("/",(req,res)=>{
    console.log("working");
    res.json({"message":"working"})
})

app.listen(Port,()=>{
    console.log("Server is Listening at " + Port + "...")
    connectDB()
})