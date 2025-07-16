import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRouter from "./routes/userRoute.js";
import quoteRouter from "./routes/quoteRoute.js";

dotenv.config();

const port = process.env.PORT || 3400;
const mongoConnectionString = process.env.MONGODB;
const app = express();

app.use(express.json());
app.use("/api/users",userRouter);
app.use("/api/quotes",quoteRouter);
mongoose.connect(mongoConnectionString).then(()=>{
    app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
    console.log("MongoDB connected");
    });
}).catch((err)=>console.log(err));

