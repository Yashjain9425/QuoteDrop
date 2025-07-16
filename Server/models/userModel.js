import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    role:{type:String,default:"user"},
    toSend:{type:Boolean,default:true}
},
{timestamps:true}
);

const userModel = mongoose.model("User",userSchema);

export default userModel;