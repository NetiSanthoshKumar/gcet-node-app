import mongoose from "mongoose";
const ProductsSchema = mongoose.Schema({
  name:{type: String},
  price:{type: String},
});

// const Products = mongoose.model("Products",ProductsSchema);
export default mongoose.model("Product",productScheme);