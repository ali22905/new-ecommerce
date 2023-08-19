import express from "express";
import { 
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  likeProduct,
  getLikes,
  cart,
  getCart,
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
router.delete('/:id', verifyTokenAndAuthorization, deleteUser) // (admin or current authenticated user)

/* UPDATE */
router.put('/update/:id', verifyTokenAndAuthorization, updateUser)
router.put('/like/:productId', verifyToken, likeProduct) // LIKE product (any authenticated user)
router.get('/like/:userId', verifyTokenAndAuthorization, getLikes) // get user liked products
router.get('/cart/:id', verifyTokenAndAuthorization, getCart) // GET user's cart (any authenticated user)
router.put('/cart', verifyToken, cart) // ADD / REMOVE product in user's cart (any authenticated user)










export default router;