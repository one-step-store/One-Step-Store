const express = require("express");
const {
  addReview,
  getReviewsByProduct,
  editReview,
  deleteReview,
} = require("../controllers/reviewController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// Menambahkan review (hanya sekali)
router.post("/", verifyToken, addReview);

// Mendapatkan semua review untuk produk tertentu
router.get("/:productId", getReviewsByProduct);

// Mengedit review
router.put("/:id", verifyToken, editReview);

// Menghapus review
router.delete("/:id", verifyToken, deleteReview);

module.exports = router;
