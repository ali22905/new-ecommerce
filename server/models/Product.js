import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    gender: { type: String, required: true },
    type: { type: String, required: true }, // t-shirt, pants, shoes, hoodie, or shorts
    sizes: { type: [Number] },
    colors: { type: [String] },
    imgs: [{
      color: { type: String },
      imgs: { type: [String]}
    }],
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    // categories: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);