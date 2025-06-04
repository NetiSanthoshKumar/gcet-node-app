import mongoose from 'mongoose'
const ordersSchema = mongoose.Schema({
  email: { type: String },
  orderValue: { type: Number },
});
// const product = mongoose.model("Product", productSchema);

export default mongoose.model("Orders", ordersSchema);