import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    Username:{type:String},
    password:{type:String},
    email:{type:String},
    role:{type:String,default:"user"},
    toSend:{type:Boolean,default:true}
},
{timestamps:true}
);

const userModel = mongoose.model("User",userSchema);

export default userModel;