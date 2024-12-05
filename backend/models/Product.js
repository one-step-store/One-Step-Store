const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock_quantity: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
  image: { type: String, required: false},
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
});

// Auto-populate category and brand on find
productSchema.pre("findOne", function (next) {
  this.populate("category brand");
  next();
});

module.exports = mongoose.model("Product", productSchema);
