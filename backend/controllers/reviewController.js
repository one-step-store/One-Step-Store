const mongoose = require("mongoose");
const Order = require("../models/Order");
const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  try {
    const { product, rating, comment } = req.body;
    const userId = req.user._id;

    // Konversi product ke ObjectId
    const productId = new mongoose.Types.ObjectId(product);

    // Cari semua order dengan produk tersebut
    const orders = await Order.find({
      userId: userId,
      "orderItems.product": productId,
    });

    if (!orders || orders.length === 0) {
      return res.status(400).json({ message: "You can only review products you have purchased." });
    }

    // Ambil semua orderItems yang sesuai dari semua order, dengan status "delivered"
    const deliveredItems = orders.flatMap(order =>
      order.orderItems.filter(
        item =>
          item.product.toString() === productId.toString() && item.status === "delivered"
      )
    );

    // Jika tidak ada item yang "delivered", kembalikan error
    if (deliveredItems.length === 0) {
      return res.status(400).json({ message: "You can only review products that have been delivered." });
    }

    // Ambil semua _id dari orderItems dengan status "delivered"
    const deliveredOrderItemIds = deliveredItems.map(item => item._id.toString());

    // Cari review yang sudah ada untuk produk ini
    const existingReviews = await Review.find({
      product: productId,
      user: userId,
      orderItemId: { $in: deliveredOrderItemIds },
    });

    // Ambil ID dari orderItems yang sudah direview
    const reviewedOrderItemIds = existingReviews.map(review => review.orderItemId.toString());

    // Cari ID dari orderItem yang belum direview
    const unreviewedOrderItemId = deliveredOrderItemIds.find(
      id => !reviewedOrderItemIds.includes(id)
    );

    // Jika tidak ada orderItem yang belum direview, kembalikan error
    if (!unreviewedOrderItemId) {
      return res.status(400).json({
        message: "You have already reviewed all eligible purchases for this product.",
      });
    }

    // Buat review baru untuk orderItem yang belum direview
    const review = new Review({
      product: productId,
      user: userId,
      orderItemId: unreviewedOrderItemId, // Simpan ID orderItem
      rating,
      comment,
    });
    await review.save();

    res.status(201).json({ message: "Review added successfully.", review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await Review.find({ product: productId }).populate("user", "name");

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found for this product." });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user._id;

    const review = await Review.findOne({ _id: id, user: userId });
    if (!review) {
      return res.status(404).json({ message: "Review not found or not authorized." });
    }

    review.rating = rating || review.rating;
    review.comment = comment || review.comment;
    await review.save();

    res.status(200).json({ message: "Review updated successfully.", review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const review = await Review.findOne({ _id: id, user: userId });
    if (!review) {
      return res.status(404).json({ message: "Review not found or not authorized." });
    }

    await review.delete();

    res.status(200).json({ message: "Review deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
