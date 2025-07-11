import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";


const register = async(req,res)=>{
    try{
        const {username,password,email} = req.body;
        const hashedPass = await bcrypt.hash(password,12);
        const userObj = {
            username,
            password:hashedPass,
            email
        }
        const result = await userModel.create(userObj);
        res.status(201).json(result);
    } catch(err){
        console.log(err);
        res.status(500).send("Something went wrong.")
        
    }
};

export {register};

