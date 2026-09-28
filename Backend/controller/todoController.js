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