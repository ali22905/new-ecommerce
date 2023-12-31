import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    gender: { type: String, required: true },
    type: { type: String, required: true }, // t-shirt, pants, shoes, hoodie, or shorts
    sizes: { type: Array, required: true },
    sizeType: { type: String }, // men - women - kids
    colors: { type: [String], required: true },
    imgs: [{
      color: { type: String },
      imgs: { type: [String]}
    }],
    price: { type: Number, required: true },
    views: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    ordersIn: { type: [String], default: []} , // the orders this product is in
    inStock: { type: Boolean, default: true },
    // categories: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);


