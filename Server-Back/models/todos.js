import mongoose from "mongoose";
const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        ID: {
            type: Number,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        Location: {
            type: String,
            // required: true,
        }
    },  
    {timestamps: true}
);

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;