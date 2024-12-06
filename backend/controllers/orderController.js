const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Review = require("../models/Review");

exports.createOrder = async (req, res) => {
  try {
    const { orderItems } = req.body;
    const userId = req.user._id; // User ID dari token

    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).json({ message: "orderItems must be a non-empty array" });
    }

    // Ambil data orderItems dari database untuk validasi dan melengkapi data
    const items = await OrderItem.find({ _id: { $in: orderItems } }).populate("product");

    if (items.length !== orderItems.length) {
      return res.status(404).json({ message: "One or more order items not found" });
    }

    // Tambahkan status 'pending' untuk tiap order item dan format datanya
    const formattedItems = items.map((item) => ({
      product: item.product,
      quantity: item.quantity,
      total_price: item.total_price,
      status: "pending", // Tambahkan status default
    }));

    // Hitung total harga
    const totalPrice = formattedItems.reduce((total, item) => total + item.total_price, 0);

    // Buat dokumen Order baru
    const order = new Order({
      userId,
      orderItems: formattedItems,
      totalPrice,
      paymentStatus: "pending", // Status order default
    });
    const savedOrder = await order.save();

    // Hapus data OrderItems dari koleksi asli setelah dipindahkan
    await OrderItem.deleteMany({ _id: { $in: orderItems } });

    res.status(201).json({
      message: "Order created successfully",
      data: savedOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan order berdasarkan user
exports.getOrdersByUser  = async (req, res) => {
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

// Fungsi untuk memperbarui status order item berdasarkan ID order dan ID order item
exports.updateOrderItemStatusById = async (req, res) => {
  const { orderId, orderItemId } = req.params; // Ambil ID order dan order item dari parameter
  const { status } = req.body; // Ambil status baru dari body permintaan

  // Validasi status
  const validStatuses = ["pending", "shipped", "delivered", "cancelled"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    // Temukan order berdasarkan ID
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Validasi paymentStatus
    if (order.paymentStatus !== "completed") {
      return res.status(400).json({
        message: `Cannot update order items. Payment status must be "completed", current status: ${order.paymentStatus}`,
      });
    }

    // Temukan item dalam order berdasarkan orderItemId
    const orderItem = order.orderItems.id(orderItemId);
    if (!orderItem) {
      return res.status(404).json({ message: "Order item not found" });
    }

    // Update status order item
    orderItem.status = status;
    await order.save(); // Simpan perubahan pada order

    res.status(200).json({
      message: "Order item status updated successfully",
      orderItem,
    });
  } catch (error) {
    console.error(error); // Log error untuk debugging
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateOrderStatusToDone = async (req, res) => {
  const { orderId, orderItemId } = req.params; // Ambil ID order dan order item dari parameter
  const { status } = req.body; // Ambil status baru dari body permintaan

  if (status !== "done") {
    return res.status(400).json({ message: "Only 'done' status is allowed for this endpoint" });
  }

  try {
    // Temukan order berdasarkan ID
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Pastikan order ini milik user yang sedang login
    if (order.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized to update this order" });
    }

    // Temukan item dalam order berdasarkan orderItemId
    const orderItem = order.orderItems.id(orderItemId);
    if (!orderItem) {
      return res.status(404).json({ message: "Order item not found" });
    }

    // Validasi status untuk perubahan menjadi "done"
    if (orderItem.status !== "delivered") {
      return res.status(400).json({
        message: "Order item can only be marked as 'done' if its status is 'delivered'",
      });
    }

    // Update status order item ke "done"
    orderItem.status = status;
    await order.save(); // Simpan perubahan pada order

    res.status(200).json({
      message: `Order item status updated to 'done' successfully`,
      orderItem,
    });
  } catch (error) {
    console.error(error); // Log error untuk debugging
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("orderItems").sort({ createdAt: -1 });

    res.status(200).json(orders); // Kirim semua order
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Fungsi untuk menghapus order berdasarkan ID
exports.deleteOrderById = async (req, res) => {
  const { id } = req.params; // Ambil ID order dari parameter

  try {
    // Hapus order berdasarkan ID
    const order = await Order.findByIdAndDelete(id); 
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};