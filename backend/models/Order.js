const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.Mixed, // Menyimpan seluruh objek produk
        required: true,
      },
      quantity: { type: Number, required: true },
      total_price: { type: Number, required: true },
      status: { type: String, default: "pending" }, // Tambahkan atribut status
    },
  ],
  totalPrice: { type: Number, required: true },
  paymentStatus: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
