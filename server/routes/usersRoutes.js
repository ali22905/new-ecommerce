import express from "express";
import { 
  getUser,
  getUsers,
  register,
} from "../controllers/usersCont.js";

const router = express.Router();










/* READ */ 
router.get('/:id', getUser)
router.get('/', getUsers)

/* CREATE */ 
router.post('/', register)


/* DELETE */ 

/* UPDATE */










export default router;