import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    phone: { type: Number, required: true },
    products: [{
        productId: { type: String },
        quantity: { type: Number, default: 1 },
        color: { type: String },
        size: { type: String },
      }],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);