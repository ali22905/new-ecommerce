import express from "express";
import { register, login } from "../controllers/authCont.js";

const router = express.Router();










/* LOGIN */ 
router.post('/login', login)


/* REGISTER */ 
router.post('/register', register)












export default router;