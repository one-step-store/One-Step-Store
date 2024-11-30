const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  upload,
  uploadProductImage,
  getProductImage,
} = require("../controllers/productController");
const { verifyToken, adminOnly } = require("../middlewares/authMiddleware");

const router = express.Router();

// CRUD operations for products
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", verifyToken, adminOnly, createProduct);
router.put("/:id", verifyToken, adminOnly, updateProduct);
router.delete("/:id", verifyToken, adminOnly, deleteProduct);

router.post("/:id/imageproduct", verifyToken, adminOnly, upload.single('image'), uploadProductImage);
router.get("/:id/imageproduct", getProductImage);

// Wildcard route for 404 handling
router.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
