import express from "express";
import { test } from "../controllers/productsCont.js";

const router = express.Router();










/* READ */ 
router.get('/', test)














export default router;