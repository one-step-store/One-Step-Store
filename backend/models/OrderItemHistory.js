const mongoose = require("mongoose");

const orderItemHistorySchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User ",
      required: true,
    },
    status: { type: String, default: "pending" }, // Menambahkan status dengan default 'pending'
  },
  { timestamps: true }
);

const OrderHistory = mongoose.model("OrderItemHistory", orderItemHistorySchema);

module.exports = OrderHistory;