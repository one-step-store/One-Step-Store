const Product = require("../models/Product"); // Benar (sesuai nama file)
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const sharp = require("sharp");

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

// exports.uploadProductImage = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     if (product.image) {
//       fs.unlinkSync(product.image); 
//     }

//     product.image = req.file.path;
//     await brand.save();

//     res.status(200).json(brand);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.uploadProductImage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const image = await sharp(req.file.path);
    const metadata = await image.metadata();

    if (metadata.width !== metadata.height) {
      fs.unlinkSync(req.file.path); 
      return res.status(400).json({ message: "Image must have a 1:1 aspect ratio" });
    }

    if (product.image) {
      fs.unlinkSync(product.image);
    }

    product.image = req.file.path;
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// exports.getProductImage = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product || !product.image) {
//       return res.status(404).json({ message: "Product or image not found" });
//     }
//     res.sendFile(path.resolve(product.image)); // Send the image file directly
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getProductImage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || !product.image) {
      return res.status(404).json({ message: "Product or image not found" });
    }

    const originalImagePath = path.resolve(product.image);

    const resizedImagePath = path.join(uploadDir, `resized-${req.params.id}.jpg`);

    await sharp(originalImagePath)
      .resize(150, 150) 
      .toFormat("jpeg")
      .toFile(resizedImagePath);

    res.sendFile(resizedImagePath, (err) => {
      if (err) {
        console.error("Error sending resized image:", err.message);
      } else {
        fs.unlinkSync(resizedImagePath);
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};