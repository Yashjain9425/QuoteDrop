import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT || 3400;
const mongoConnectionString = process.env.MONGODB;
const app = express();


mongoose.connect(mongoConnectionString).then((
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
        console.log("MongoDB Connected");
    })
)).catch((err) => console.log(err));