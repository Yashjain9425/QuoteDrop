import { quoteSave } from "../controllers/quoteController.js";
import express from "express";

const router = express.Router();

//saving quotes
router.post('/save-quote',quoteSave);



export default router;