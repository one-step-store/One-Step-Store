// Routes/brandRoutes.js
const express = require("express");
const { verifyToken, adminOnly } = require("../middlewares/authMiddleware");
const {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
  upload,
  uploadBrandImage,
  getBrandImage,
} = require("../controllers/brandController");

const router = express.Router();

router.get("/", getAllBrands);
router.get("/:id", getBrandById);
router.put("/:id", verifyToken, adminOnly, updateBrand);
router.delete("/:id", verifyToken, adminOnly, deleteBrand);
router.post("/", verifyToken, adminOnly, createBrand);
router.post("/:id/image", verifyToken, adminOnly, upload.single('image'), uploadBrandImage);
router.get("/:id/image", getBrandImage);


module.exports = router;