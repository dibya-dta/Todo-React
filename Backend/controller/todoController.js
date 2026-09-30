// import Todo from '../models/todoModel.js'
import Todo from '../models/todoModel.js'

export const addTodo = async(req,res)=>{
    try{
        let body = req.body;
        console.log(body)
        const addTodo = new Todo({task:body.task,isReal:false})
       const result = await addTodo.save()
       console.log(result)
       return res.status(200).json(result)
    }catch(err){
        console.log('err')
        return res.status(500).json({"message" : "something is wrong"})
    }
}

export const getTodo = async(req,res)=>{
    try{
        const result = await Todo.find()
        return res.status(200).json(result)
    }catch(err){
        console.log('err')
        return res.status(400).json({"message":"something went wrong"})
    }
}

export const deleteTodo = async(req, res)=>{
    try{
        const {id} = req.params
        const result = await Todo.findByIdAndDelete(id)
        // console.log(result)
        return res.status(200).json({success:true})
    }catch(err){
        console.log('err')
        return res.status(400).json({"message":"something went wrong in delete route"})
    }
}
export const editTodo = async(req, res)=>{
    try{
        const {id} = req.params;
        const body = req.body;
        console.log(body) 
        // console.log(id)
        const result = await Todo.findByIdAndUpdate(id,{isRead: body},{returnDocument:true})
        console.log(result)
        return res.status(200).json({success:true})
    }catch(err){
        console.log('err')
        return res.status(400).json({"message":"something went wrong in delete route"})
    }
}