const OrderItem = require("../models/OrderItem");
const Product = require("../models/Product");

// Menambahkan order item
exports.addOrderItem = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    const userId = req.user._id;  // Ambil userId dari req.user yang sudah di-set di middleware

    if (!product || !quantity) {
      return res.status(400).json({ message: "Product and quantity are required" });
    }

    const productData = await Product.findById(product);
    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (productData.stock_quantity < quantity) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    // Cek apakah order item dengan produk yang sama sudah ada untuk user ini
    const existingOrderItem = await OrderItem.findOne({ product: product, user: userId });

    if (existingOrderItem) {
      // Jika order item sudah ada, tambahkan quantity
      if (productData.stock_quantity + existingOrderItem.quantity < quantity) {
        return res.status(400).json({ message: "Insufficient stock to update" });
      }

      // Update stok produk
      productData.stock_quantity += existingOrderItem.quantity - quantity;
      await productData.save();

      // Tambahkan quantity baru ke yang sudah ada
      existingOrderItem.quantity += quantity;
      existingOrderItem.total_price = productData.price * existingOrderItem.quantity;
      await existingOrderItem.save();

      return res.status(200).json(existingOrderItem);
    }

    const total_price = productData.price * quantity;

    // Kurangi stok produk
    productData.stock_quantity -= quantity;
    await productData.save();

    // Buat order item baru dengan menambahkan userId
    const newOrderItem = new OrderItem({
      product,
      quantity,
      total_price,
      user: userId // Menambahkan userId ke order item
    });
    await newOrderItem.save();

    res.status(201).json(newOrderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan semua order item
exports.getOrderItems = async (req, res) => {
  try {
    const userId = req.user._id;  // Ambil userId dari req.user yang sudah di-set di middleware

    const orderItems = await OrderItem.find({ user: userId }).populate("product");
    if (!orderItems || orderItems.length === 0) {
      return res.status(404).json({ message: "No order items found" });
    }
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id; // Ambil ID pengguna dari token

    // Pastikan hanya dapat mengambil order item yang milik pengguna yang sedang login
    const orderItem = await OrderItem.findOne({ _id: id, user: user._id }).populate("product");

    if (!orderItem) {
      return res.status(404).json({ message: "Order item not found" });
    }

    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Mendapatkan order item berdasarkan ID
exports.editOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const userId = req.user._id;  // Ambil userId dari req.user yang sudah di-set di middleware

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Quantity must be a positive number" });
    }

    const orderItem = await OrderItem.findOne({ _id: id, user: userId }).populate("product");
    if (!orderItem) {
      return res.status(404).json({ message: "Order item not found or not owned by user" });
    }

    const productData = orderItem.product;
    if (productData.stock_quantity + orderItem.quantity < quantity) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    // Update stok produk
    productData.stock_quantity += orderItem.quantity - quantity;
    await productData.save();

    // Update quantity dan total price
    orderItem.quantity = quantity;
    orderItem.total_price = productData.price * quantity;
    await orderItem.save();

    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mengedit order item
exports.deleteOrderItem = async (req, res) => {
  try {
    const userId = req.user._id;  // Ambil userId dari req.user yang sudah di-set di middleware

    // Hapus order item yang hanya terkait dengan user yang sedang login
    const orderItem = await OrderItem.findOneAndDelete({ _id: req.params.id, user: userId }).populate("product");
    
    if (!orderItem) {
      return res.status(404).json({ message: "Order item not found or not owned by user" });
    }

    // Update stok produk
    const productData = orderItem.product;
    productData.stock_quantity += orderItem.quantity;
    await productData.save();

    res.status(200).json({ message: "Order item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
