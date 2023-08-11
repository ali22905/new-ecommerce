import express from "express";
import { 
  getOrders,
  placeOrder,
  getOrdersMonth,
} from "../controllers/ordersCont.js";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../controllers/verifyToken.js";

const router = express.Router();










/* READ */ 
router.get('/', verifyTokenAndAdmin, getOrders)
// TODO:
// get the odrders according to the params number. 0 means current month and 1 means last month and so on
router.get('/month/:month', verifyTokenAndAdmin, getOrdersMonth) 



/* CREATE */
router.post('/', verifyToken, placeOrder)













export default router;