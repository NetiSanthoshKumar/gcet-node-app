import express from 'express';
import ordersModel from "../models/ordersModel.js"

const ordersRouter = express.Router()

ordersRouter.post("/new", async (req, res) => {
  const { email,ordersValue } = req.body;
  const result = await ordersModel.insertOne({email: email,ordersValue:ordersValue });
  return res.json(result);
});

export default ordersRouter