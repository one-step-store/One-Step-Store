const Product = require("../models/Product"); // Benar (sesuai nama file)
const fs = require("fs");
const multer = require("multer");
const path = require("path");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category").populate("brand");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category").populate("brand");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const uploadDir = path.join(__dirname, '../uploads/products'); 

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (_req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

exports.upload = multer({ storage });

exports.uploadProductImage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.image) {
      fs.unlinkSync(product.image); 
    }

    product.image = req.file.path;
    await brand.save();

    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductImage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || !product.image) {
      return res.status(404).json({ message: "Product or image not found" });
    }
    res.sendFile(path.resolve(product.image)); // Send the image file directly
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

