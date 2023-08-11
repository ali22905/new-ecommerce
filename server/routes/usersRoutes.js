import express from "express";
import { 
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/usersCont.js";
import { 
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../controllers/verifyToken.js";

const router = express.Router();










/* READ */ 
router.get('/:id', verifyTokenAndAuthorization, getUser) // GET one user (current page user or admin)
router.get('/', verifyTokenAndAdmin, getUsers) // GET all users (admin only)


/* DELETE */ 
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)

/* UPDATE */
router.put('/:id', verifyTokenAndAuthorization, updateUser)










export default router;