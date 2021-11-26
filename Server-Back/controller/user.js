import User from "../models/user.js";

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