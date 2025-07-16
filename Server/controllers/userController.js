import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET;


const register = async (req, res) => {
    try {
        const { username, password, email, role, toSend } = req.body;
        const hashedPass = await bcrypt.hash(password, 12);
        const userObj = {
            username,
            password: hashedPass,
            email,
            role,
            toSend
        }
        const result = await userModel.create(userObj);
        res.status(201).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong.")

    }
};

const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const found = await userModel.findOne({ email });

        if (found) {
            const isCompare = await bcrypt.compare(password, found.password);
            if (isCompare) {
                const userObj = {
                    username: found.username,
                    email: found.email,
                    role: found.role
                }

                const token = jwt.sign(userObj, secretKey, { expiresIn: "2h" });
                res.status(200).json({ ...userObj, token });
            } else {
                res.status.send(401).json({ message: "Invalid password" });
            }

        }
        else {
            res.status.send(401).json({ message: "User not exists" });
        }

    }
    catch (err) {
        console.log(err)
        res.status(500).send("Something went wrong");
    }
}


//admin routes
const getUser = async (req, res) => {
    try {
        const user = req.params.id;
        const found = await userModel.findOne({ _id: user });
        res.status(200).json(found);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }

}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await userModel.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully", user: deleted });

    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            message:
                "Something went wrong"
        });
    }

}

const displayUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users);

    } catch (err) {
        console.log(err);
        res.status(400).send("Something went wrong");
    }
}


const updateUsers = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        if (body.password) {
            body.password = await bcrypt.hash(body.password, 12);
        }

        const updated = await userModel.findByIdAndUpdate(id, body);
        res.status(200).json(updated);

    } catch (err) {
        console.log(err);
        res.status(400).send("Something went wrong");
    }

}

const addUser = async (req, res) => {
    try {
        const body = req.body;
        const hashedPass = await bcrypt.hash(body.password, 12);
        body.password = hashedPass;
        const added = await userModel.create(body);
        res.status(200).json(added);
    } catch (err) {
        console.log(err);
        res.status(400).send("Something went wrong");
    }

}

export { register, login, getUser, deleteUser, displayUsers, updateUsers,addUser };

