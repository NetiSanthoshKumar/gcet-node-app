import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const MONGODB_URI = process.env.MONGODB_URI

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders",orderRouter)

app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started");
}); 