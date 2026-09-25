import express from 'express';

const app = express();
const Port = 3000;


app.get("/",(req,res)=>{
    console.log("working");
    res.json({"message":"working"})
})

app.listen(Port,()=>{
    console.log("Server is Listening at " + Port + "...")
})