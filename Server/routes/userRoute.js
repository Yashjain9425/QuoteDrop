import express from "express";
import { register,login, getUser, deleteUser, displayUsers, updateUsers, addUser } from "../controllers/userController.js";
import { authenticate, authorize } from "../middlewares/auth.js";
const router = express.Router();

//user routes
router.post('/register',register);
router.post('/login',login);


//admin routes
router.get('/all-users',authenticate,authorize("admin"),displayUsers);
router.get('/:id',authenticate,authorize("admin"), getUser);
router.delete('/:id',authenticate,authorize("admin"),deleteUser);
router.patch('/:id',authenticate,authorize("admin"),updateUsers);
router.post("/add-user",authenticate,authorize("admin"),addUser);

export default router;

