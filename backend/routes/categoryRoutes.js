const express = require("express");
const { verifyToken, adminOnly } = require("../middlewares/authMiddleware");
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", verifyToken, adminOnly, createCategory);
router.put("/:id", verifyToken, adminOnly, updateCategory);
router.delete("/:id", verifyToken, adminOnly, deleteCategory);

module.exports = router;
