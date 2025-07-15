import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    quoteId :{type:mongoose.Schema.Types.ObjectId},
    author:{type:String,required:true},
    content:{type:String,required:true,min:2}
},
{timestamps:true}
);

const quoteModel = mongoose.model("Quote",quoteSchema);

export default quoteModel;