import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        ID: {
            type: String,
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

const User = mongoose.model("User", userSchema);
export default User;