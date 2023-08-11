import express from "express";
import { 
  getProducts,
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productsCont.js";
import { 
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../controllers/verifyToken.js";

const router = express.Router();










/* READ */ 
router.get('/', getProducts) // get all products or use params (new - popular - search)
router.get('/:id', getProduct) // get all products




/* CREATE */ 
router.post('/', verifyTokenAndAdmin, addProduct) // CREATE product (admin only)



/* DELETE */ 
router.delete('/:id', verifyTokenAndAdmin, deleteProduct) // CREATE product (admin only)



/* UPDATE */ 
router.put('/:id', verifyTokenAndAdmin, updateProduct) // CREATE product (admin only)




export default router;