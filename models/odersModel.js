import mongoose from "mongoose";
const ordersSchema = mongoose.Schema({
  email:{type: String},
  ordersValue:{type: string},
});

// const orders = mongoose.model("Orders",ordersSchema);
export default mongoose.model("Orders",ordersSchema);