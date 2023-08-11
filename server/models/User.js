import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    firstName: { type:String, required: true },
    lastName: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
    // there will be a button to choose 2 same products with different colors isA
    cart: [{
      productId: { type: String },
      color: { type: String },
      size: { type: String },
      quantity: { type: String, default: 1 },
    }],
    favs: { type: [String] }, //favorites
    orders: { type: Array, default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);