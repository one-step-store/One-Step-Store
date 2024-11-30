const express = require('express');
const {
  createOrder,
  getOrdersByUser ,
  getOrderHistoryByUser ,
  updateOrderStatusById,
  getAllOrders, // Import fungsi baru
  getAllOrdersGroupedByCategory, // Import fungsi baru
  deleteOrderById, // Import fungsi baru
} = require('../controllers/orderController');
const { verifyToken, adminOnly } = require('../middlewares/authMiddleware'); // Import middleware

const router = express.Router();

// Rute untuk membuat order - hanya perlu token
router.post('/', verifyToken, createOrder);

// Rute untuk mendapatkan order berdasarkan user - hanya perlu token
router.get('/', verifyToken, getOrdersByUser  );

// Rute untuk mendapatkan riwayat order berdasarkan user - hanya perlu token
router.get('/history', verifyToken, getOrderHistoryByUser  );

// Rute untuk mendapatkan semua order - hanya perlu token
router.get('/all', verifyToken, adminOnly, getAllOrders);

// Rute untuk mendapatkan semua order dikelompokkan berdasarkan kategori - hanya perlu token
router.get('/grouped', verifyToken, adminOnly, getAllOrdersGroupedByCategory);

// Rute untuk menghapus order berdasarkan ID - memerlukan token dan harus admin
router.delete('/:id', verifyToken, adminOnly, deleteOrderById);

// Rute untuk memperbarui status order berdasarkan ID - memerlukan token dan harus admin
router.put('/:id/status', verifyToken, adminOnly, updateOrderStatusById);

module.exports = router;