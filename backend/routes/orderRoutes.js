const express = require('express');
const {
  createOrder,
  getOrdersByUser,
  updateOrderItemStatusById,
  getAllOrders,
  deleteOrderById,
  updateOrderStatusToDone, // Import fungsi baru
} = require('../controllers/orderController');
const { verifyToken, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

// Rute untuk membuat order - hanya perlu token
router.post('/', verifyToken, createOrder);

// Rute untuk mendapatkan order berdasarkan user - hanya perlu token
router.get('/', verifyToken, getOrdersByUser);

// Rute untuk mendapatkan semua order - memerlukan token dan admin
router.get('/all', verifyToken, adminOnly, getAllOrders);

// Rute untuk menghapus order berdasarkan ID - memerlukan token dan admin
router.delete('/:id', verifyToken, adminOnly, deleteOrderById);

// Rute untuk memperbarui status order item berdasarkan ID order dan ID order item
router.put('/:orderId/items/:orderItemId/status', verifyToken, adminOnly, updateOrderItemStatusById);

// Rute untuk memperbarui status order menjadi "done"
router.put('/:orderId/items/:orderItemId/done', verifyToken, updateOrderStatusToDone);

module.exports = router;
