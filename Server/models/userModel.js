import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{type:String},
    password:{type:String},
    email:{type:String,unique:true},
    role:{type:String,default:"user"},
    toSend:{type:Boolean,default:true}
},
{timestamps:true}
);

const userModel = mongoose.model("User",userSchema);

export default userModel;