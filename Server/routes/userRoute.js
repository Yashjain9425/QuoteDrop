import express from "express";
import { register,login, getUser } from "../controllers/userController.js";
import { authenticate, authorize } from "../middlewares/auth.js";
const router = express.Router();

//user routes
router.post('/register',register);
router.post('/login',login);


//admin routes
router.get('/:id',authenticate,authorize("admin"), getUser);

export default router;

