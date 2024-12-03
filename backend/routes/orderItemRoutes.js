const express = require("express");
const { addOrderItem, getOrderItems, getOrderItemById, editOrderItem, deleteOrderItem } = require("../controllers/orderItemController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// Route untuk menambah order item
router.post("/", verifyToken, addOrderItem);

// Route untuk mendapatkan semua order item
router.get("/", verifyToken, getOrderItems);

// Route untuk mendapatkan order item berdasarkan ID
router.get("/:id", verifyToken, getOrderItemById);

// Route untuk mengedit order item
router.patch("/:id", verifyToken, editOrderItem);

// Route untuk menghapus order item
router.delete("/:id", verifyToken, deleteOrderItem);

module.exports = router;
