const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const OrderHistory = require("../models/OrderItemHistory");
const Review = require("../models/Review");

exports.createOrder = async (req, res) => {
  try {
    const { orderItems } = req.body;
    const userId = req.user._id; // User ID dari token

    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).json({ message: "orderItems must be a non-empty array" });
    }

    // Validasi order items
    const items = await OrderItem.find({ _id: { $in: orderItems } }).populate("product");

    if (items.length !== orderItems.length) {
      return res.status(404).json({ message: "One or more order items not found" });
    }

    // Hitung total harga
    const totalPrice = items.reduce((total, item) => total + item.total_price, 0);

    // Buat order baru
    const order = new Order({
      userId,
      orderItems,
      totalPrice,
    });
    const savedOrder = await order.save();

    // Pindahkan OrderItems ke OrderHistory
    const historyData = items.map((item) => ({
      orderId: savedOrder._id,
      product: item.product._id,
      quantity: item.quantity,
      total_price: item.total_price,
      user: userId,
    }));
    await OrderHistory.insertMany(historyData);

    // Hapus OrderItems dari koleksi asli
    await OrderItem.deleteMany({ _id: { $in: orderItems } });

    res.status(201).json({
      message: "Order created and items moved to history",
      data: {
        order: savedOrder,
        totalPrice,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan order berdasarkan user
exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate("orderItems");

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan riwayat order berdasarkan user dan menyertakan review produk
// Mendapatkan riwayat order berdasarkan user dan menyertakan review produk
exports.getOrderHistoryByUser = async (req, res) => {
  try {
    const history = await OrderHistory.find({ user: req.user._id })
      .populate("product") // Populate produk pada order history
      .populate({
        path: 'product',
        populate: [
          { path: 'category', select: 'name' }, // Populate kategori dan ambil hanya nama
          { path: 'brand', select: 'name' }, // Populate brand dan ambil hanya nama
          {
            path: 'reviews', // Populate reviews pada produk
            match: { user: req.user._id }, // Hanya ambil review milik user yang bersangkutan
            select: 'rating content user', // Hanya ambil rating, content, dan user dari review
            options: { limit: 1 } // Membatasi hanya 1 review per produk per user
          }
        ]
      })
      .sort({ createdAt: -1 });

    if (!history || history.length === 0) {
      return res.status(404).json({ message: "No order history found for this user" });
    }

    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOrderStatusById = async (req, res) => {
  const { id } = req.params; // Ambil ID order dari parameter
  const { status } = req.body; // Ambil status baru dari body permintaan

  // Validasi status
  const validStatuses = ["pending", "shipped", "delivered", "cancelled"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    // Temukan order berdasarkan ID
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update status order
    order.status = status;
    await order.save();

    // Update status di OrderHistory
    await OrderHistory.updateMany({ orderId: order._id }, { status });

    res.status(200).json({
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    console.error(error); // Tambahkan log untuk membantu debugging
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await OrderHistory.find().populate("product") // Populate produk pada order history
    .populate({
      path: 'product',
      populate: [
        { path: 'category', select: 'name' }, // Populate kategori dan ambil hanya nama
        { path: 'brand', select: 'name' }, // Populate brand dan ambil hanya nama
        {
          path: 'reviews', // Populate reviews pada produk
          match: { user: req.user._id }, // Hanya ambil review milik user yang bersangkutan
          select: 'rating content user', // Hanya ambil rating, content, dan user dari review
          options: { limit: 1 } // Membatasi hanya 1 review per produk per user
        }
      ]
    })
    .sort({ createdAt: -1 });
     // Ambil semua order dari OrderHistory
    res.status(200).json(orders); // Kirim semua order
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Fungsi untuk mendapatkan semua order dari OrderHistory dan mengelompokkannya berdasarkan kategori
exports.getAllOrdersGroupedByCategory = async (req, res) => {
  try {
    // Ambil riwayat order berdasarkan user dengan populate untuk produk, kategori, dan brand
    const orders = await OrderHistory.find()
      .populate({
        path: 'product',
        populate: [
          { path: 'category', select: 'name' }, // Populate kategori dan ambil hanya nama
          { path: 'brand', select: 'name' }, // Populate brand dan ambil hanya nama
          {
            path: 'reviews', // Populate reviews pada produk
            match: { user: req.user._id }, // Hanya ambil review milik user yang bersangkutan
            select: 'rating content user', // Hanya ambil rating, content, dan user dari review
            options: { limit: 1 } // Membatasi hanya 1 review per produk per user
          }
        ]
      })
      .sort({ createdAt: -1 });

    // Mengelompokkan order berdasarkan kategori
    const groupedOrders = orders.reduce((acc, order) => {
      const category = order.product.category ? order.product.category.name : 'Uncategorized'; // Ambil nama kategori
      if (!acc[category]) {
        acc[category] = []; // Inisialisasi array jika kategori belum ada
      }
      acc[category].push(order); // Tambahkan order ke kategori yang sesuai
      return acc;
    }, {});

    // Mengubah struktur hasil agar lebih terorganisir
    const result = Object.keys(groupedOrders).map(category => ({
      category,
      orders: groupedOrders[category]
    }));

    res.status(200).json(result); // Kirim hasil yang dikelompokkan
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Fungsi untuk menghapus order berdasarkan ID
// Fungsi untuk menghapus order berdasarkan ID
exports.deleteOrderById = async (req, res) => {
  const { id } = req.params; // Ambil ID order dari parameter

  try {
    // Hapus order berdasarkan ID
    const order = await Order.findByIdAndDelete(id); 
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Hapus entri yang terkait di OrderHistory
    await OrderHistory.deleteMany({ orderId: id });

    res.status(200).json({ message: 'Order and related history deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};