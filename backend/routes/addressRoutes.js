const express = require("express");
const {
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
} = require("../controllers/addressController"); // Impor sesuai dengan nama fungsi
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// CRUD operations for addresses
router.get("/", verifyToken, getAddresses); // Mendapatkan semua alamat user
router.post("/", verifyToken, createAddress); // Membuat alamat baru
router.put("/:id", verifyToken, updateAddress); // Memperbarui alamat
router.delete("/:id", verifyToken, deleteAddress); // Menghapus alamat

// Wildcard route for 404 handling
router.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
