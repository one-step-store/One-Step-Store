const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User ", required: true },
  orderItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderItem", required: true }],
  totalPrice: { type: Number, required: true }, // Menyimpan total harga
  status: { type: String, default: "pending" }, // Menambahkan status dengan default 'pending'
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);