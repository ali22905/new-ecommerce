// libraries & settings
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import cookieParser from "cookie-parser";
// Routers
import productsRoutes from "./routes/productsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import authRoutes from "./routes/authRoutes.js";


const app = express();
dotenv.config();


/* CONNECT TO DB */ 
const connect = () => {
  mongoose
    .connect(process.env.DB_LINK)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};




/* MIDDLEWARE */
app.use(cookieParser())
app.use(express.json());
app.use(cors())
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);










app.listen(8800, () => {
  connect();
  console.log("http://localhost:8800");
});
