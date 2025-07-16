import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretKey = process.env.SECRET

const authenticate = (req,res,next) =>{

    try{
        let token = req.headers.authorization;
        
        token = token.split(" ")[1];
        const user = jwt.verify(token,secretKey);

        req.role = user.role;
        next();
    }
    catch(err){
        res.status(401).json({message:"Access Denied"});
    }
    
}

const authorize = (role) =>{
    return(req,res,next)=>{
        if(req.role === role)
        {
                next();
        }
        else{
            res.status(401).json({message:"Unauthorized access"});
        }
    }
}

export {authenticate,authorize};