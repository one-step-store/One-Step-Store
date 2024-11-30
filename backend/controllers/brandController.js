const fs = require("fs");
const Brand = require("../models/Brand");
const multer = require("multer");
const path = require("path");

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

const upload = multer({ storage });

const uploadBrandImage = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    if (brand.image) {
      fs.unlinkSync(brand.image); 
    }

    brand.image = req.file.path;
    await brand.save();

    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBrandImage = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand || !brand.image) {
      return res.status(404).json({ message: "Brand or image not found" });
    }
    res.sendFile(path.resolve(brand.image)); // Send the image file directly
  } catch (error) {
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
