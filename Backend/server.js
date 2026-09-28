import express from 'express';
import { connectDB } from './config/connectDB.js';
import { configDotenv } from 'dotenv';
import cors from 'cors'
// import router from './router/todoRouter.js';
import todoRouter from './router/todoRouter.js'

const app = express();
const Port = 3000;
configDotenv();


app.use(cors())
app.use(express.json())


app.use('/api', todoRouter)

// app.get("/",(req,res)=>{
//     console.log("working");
//     res.json({"message":"working"})
// })
// app.post("/api/addTodo",(req,res)=>{
//     try{
//     // console.log( req.body)
//     const data = req.body

//     res.json({"message":"working"})
//     }catch(err){
//         console.log('err')
//     }
// })

app.listen(Port,()=>{
    console.log("Server is Listening at " + Port + "...")
    connectDB()
})