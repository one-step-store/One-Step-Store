const express = require("express");
const { verifyToken, adminOnly } = require("../middlewares/authMiddleware");
const {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandController");

const router = express.Router();

// CRUD operations for brands
router.get("/", getAllBrands);
router.get("/:id", getBrandById);
router.post("/", verifyToken, adminOnly, createBrand);
router.put("/:id", verifyToken, adminOnly, updateBrand);
router.delete("/:id", verifyToken, adminOnly, deleteBrand);

module.exports = router;
