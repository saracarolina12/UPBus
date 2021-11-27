import User from "../models/user.js";
import mongoose from "mongoose";

export const getUser = async(req, res) => {
    try{
        const User = await User.find();
        res.status(200).json(User);
    }catch(error){
        res.status(400).json({message: error.message});
    }
};

export const createUser = async(req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    try {
        await user.save();
        res.status(200).json(user);
    }catch(error) {
        res.status(400).json({message: error.message});
    }
};

export const SearchUser = async(req, res)=>{
    const {id} = req.body;
    // if(User.findOne(id)){
    //     await User.findOne(id);
    //     res.status(200).json({message: "Found!!"})
    // }
    // else{   
    //     return res.status(404).send("This id doesn't exist")
    // }
    await User.findOne(id);
}

// export const deleteTodos = async(req, res) => {
//     const {id} = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id))
//         return res.status(404).send("This id doesn't exist")
    
//     await Todo.findByIdAndRemove(id);
//         res.status(200).json({message : "Todo deleted successfully"})
// };