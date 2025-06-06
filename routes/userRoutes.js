import express from "express";
import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
const SECRET_KEY ="hellowworld";
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  const hashpassword = await bcrypt.hash(pass,10);
  const result = await userModel.insertOne({
    name: name,
    email: email,
    pass: hashpassword,
  });
  return res.json(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const result = await userModel.findOne({ email, pass });
  if (!result) return res.json({ message: "Invalid user or password" });
  const matchPassword = await bcrypt.compare(pass,result.pass);
  if(!matchPassword){
    return res.status(400).json({message:"Invalid Password"});
  }
  const token = jwt.sign({email: result.email, id: result._id},SECRET-KEY);
  console.log(result);
  return res.json({user : result,token : token});
});



export default userRouter;
