import express, { Router } from "express";
import { register,login } from "../controllers/userController.js";
const router = express.Router();


router.post('/register',register);
router.post('/login',login);

export default router;

