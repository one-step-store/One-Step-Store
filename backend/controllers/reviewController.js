const Review = require("../models/Review");
const OrderHistory = require("../models/OrderItemHistory");

exports.addReview = async (req, res) => {
  try {
    const { product, rating, comment } = req.body;
    const userId = req.user._id;

    // Periksa apakah user telah memesan produk
    const orderHistory = await OrderHistory.findOne({
      user: userId,
      product: product,
    });

    if (!orderHistory) {
      return res.status(400).json({ message: "You can only review products you have purchased." });
    }

    // Periksa apakah review sudah ada untuk produk ini
    const existingReview = await Review.findOne({ product, user: userId });
    if (existingReview) {
      return res.status(400).json({ message: "You can only review a product once." });
    }

    // Tambahkan review baru
    const review = new Review({ product, user: userId, rating, comment });
    await review.save();

    res.status(201).json({ message: "Review added successfully.", review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    // Ambil semua review untuk produk tertentu
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

    // Periksa apakah review ada dan milik user
    const review = await Review.findOne({ _id: id, user: userId });
    if (!review) {
      return res.status(404).json({ message: "Review not found or not authorized." });
    }

    // Update review
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

    // Periksa apakah review ada dan milik user
    const review = await Review.findOne({ _id: id, user: userId });
    if (!review) {
      return res.status(404).json({ message: "Review not found or not authorized." });
    }

    // Hapus review
    await review.delete();

    res.status(200).json({ message: "Review deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
