const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  total_price: {
    type: Number,
    required: true
  },
  user: {  // Pastikan field ini ada
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true  // Harus ada, sesuai dengan pesan error
  }
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);
module.exports = OrderItem;
