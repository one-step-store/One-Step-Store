const Product = require("../models/Product"); // Benar (sesuai nama file)
const Review = require("../models/Review");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const sharp = require("sharp");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category").populate("brand");

    const productIds = products.map(product => product._id);

    const reviews = await Review.find({ product: { $in: productIds } }).populate(
      "user",
      "first_name last_name"
    );

    const productsWithReviews = products.map(product => {
      const productReviews = reviews.filter(review =>
        review.product.equals(product._id)
      );
      return { ...product.toObject(), reviews: productReviews };
    });

    res.status(200).json(productsWithReviews);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("category")
      .populate("brand");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const reviews = await Review.find({ product: req.params.id }).populate("user", "first_name last_name");

    res.status(200).json({ product, reviews });
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

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, JPG, and PNG are allowed."));
  }
};

exports.upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // Batas maksimal 2MB
  fileFilter,
});

exports.uploadProductImage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const resizedImagePath = path.join(uploadDir, `resized-${Date.now()}.jpg`);

    // Resize gambar menjadi 150x150 dan simpan ke path baru
    try {
      await sharp(req.file.path)
        .resize(500, 500)
        .jpeg({ quality: 80 })
        .toFile(resizedImagePath);

      // Hapus gambar asli setelah di-resize
      await fs.promises.unlink(req.file.path);
    } catch (err) {
      console.error("Error resizing image:", err.message);
      return res.status(500).json({ message: "Error resizing image" });
    }

    // Hapus gambar lama jika ada
    if (product.image) {
      try {
        await fs.promises.unlink(product.image);
      } catch (err) {
        console.error("Error deleting old image:", err.message);
      }
    }

    // Simpan path gambar baru ke database
    product.image = resizedImagePath;
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    console.error("Error uploading product image:", error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.getProductImage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || !product.image) {
      return res.status(404).json({ message: "Product or image not found" });
    }

    const imagePath = path.resolve(product.image);
    res.sendFile(imagePath, (err) => {
      if (err) {
        console.error("Error sending image:", err.message);
        res.status(500).json({ message: "Error sending image" });
      }
    });
  } catch (error) {
    console.error("Error getting product image:", error.message);
    res.status(500).json({ message: error.message });
  }
};