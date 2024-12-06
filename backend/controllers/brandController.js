const fs = require("fs");
const Brand = require("../models/Brand");
const multer = require("multer");
const path = require("path");
const sharp = require("sharp");

// Get all brands
const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single brand by ID
const getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new brand
const createBrand = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Brand name is required" });
    }
    const brand = new Brand({ name });
    await brand.save();
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a brand
const updateBrand = async (req, res) => {
  try {
    const { name } = req.body;
    const brand = await Brand.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a brand
const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.status(200).json({ message: "Brand deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const uploadDir = path.join(__dirname, '../uploads/brand'); 

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

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // Batas maksimal 2MB
  fileFilter,
});

const uploadBrandImage = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
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
    if (brand.image) {
      try {
        await fs.promises.unlink(brand.image);
      } catch (err) {
        console.error("Error deleting old image:", err.message);
      }
    }

    // Simpan path gambar baru ke database
    brand.image = resizedImagePath;
    await brand.save();

    res.status(200).json(brand);
  } catch (error) {
    console.error("Error uploading product image:", error.message);
    res.status(500).json({ message: error.message });
  }
};

const getBrandImage = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand || !brand.image) {
      return res.status(404).json({ message: "Brand or image not found" });
    }

    const imagePath = path.resolve(brand.image);
    res.sendFile(imagePath, (err) => {
      if (err) {
        console.error("Error sending image:", err.message);
        res.status(500).json({ message: "Error sending image" });
      }
    });
  } catch (error) {
    console.error("Error getting brand image:", error.message);
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
  upload,
  uploadBrandImage,
  getBrandImage,
};
