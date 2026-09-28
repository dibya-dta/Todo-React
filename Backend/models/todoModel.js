import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: {
        type:String,
        required:true,
    },
    isRead: {
        type: Boolean,
        required: true,
        default: false
    }
})

export default mongoose.model("Todo" , todoSchema);