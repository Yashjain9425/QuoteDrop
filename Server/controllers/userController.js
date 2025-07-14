import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv  from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET; 


const register = async(req,res)=>{
    try{
        const {username,password,email,role,toSend} = req.body;
        const hashedPass = await bcrypt.hash(password,12);
        const userObj = {
            username,
            password:hashedPass,
            email,
            role,
            toSend
        }
        const result = await userModel.create(userObj);
        res.status(201).json(result);
    } catch(err){
        console.log(err);
        res.status(500).send("Something went wrong.")
        
    }
};

const login = async(req,res) => {
    try{

    const {email,password} = req.body;
        if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
}

    const found = await userModel.findOne({email});

    if(found){
        const isCompare = bcrypt.compare(password,found.password);
        if(isCompare)
        {
            const userObj =  {
                username:found.username,
                email : found.email,
                role:found.role
            }

            const token = jwt.sign(userObj,secretKey,{expiresIn:"2h"});
            res.status(200).json({...userObj,token});
        }else{
            res.status.send(401).json({message:"Invalid password"});
        }

    }
    else{
        res.status.send(401).json({message:"User not exists"});
    }

    }
    catch(err){
        console.log(err)
        res.status(500).send("Something went wrong");
    }
}


const getUser = async(req,res) =>{
    try{
        const user = req.params.id;
        const found = await userModel.findOne({_id:user});
        res.status(200).json(found);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send("Something went wrong");
    }

}

export {register,login,getUser};

