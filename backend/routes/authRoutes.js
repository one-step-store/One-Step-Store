const express = require("express");
const { register, login, getUser } = require("../controllers/authController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Get user data (protected route)
router.get("/user", verifyToken, getUser);

// Wildcard route for 404 handling
router.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
