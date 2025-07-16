import quoteModel from "../models/quoteModel.js";

const quoteSave = async(req,res)=>{
    
    try{
        const {author,content} = req.body;
        const quotes = {
            author,
            content
        }
        const savedQuotes = await quoteModel.create(quotes);
        res.status(200).json(savedQuotes);

    }catch(err)
    {
        console.log(err);
        res.status(400).send("Internal Server Error");
    }

}

export {quoteSave};