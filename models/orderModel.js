import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  email: { type: String },
  price: { type: Number },
  // orderDate: { type: Date,default: Date.now },
});
// const product = mongoose.model("Product", );

export default mongoose.model("Order", orderSchema);