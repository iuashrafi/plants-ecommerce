const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    category_id: {
      type: String,
    },
    inventory_id: {
      type: String,
    },
    price: {
      type: Number,
    },
    discount_id: {
      type: Number,
    },
    productPicture1: {
      type: String,
      default: "",
    },
    productPicture2: {
      type: String,
      default: "",
    },
    productPicture3: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
module.exports = Product = mongoose.model("Product", ProductSchema);
