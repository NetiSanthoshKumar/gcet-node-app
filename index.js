import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import ordersRouter from "./routes/ordersRoutes.js";

//const MONGO_URI = process.env.MONGO_URI

const DBUSER =encodeURIComponent(process.env.DBUSER)
const DBPASS =encodeURIComponent(process.env.DBPASS)
const MONGO_URI=`mongodb+srv://${DBUSER}:${DBPASS}@cluster0.akm34oo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders",ordersRouter)

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });