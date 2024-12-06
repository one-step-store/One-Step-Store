require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const cors = require("cors");
const YAML = require("yamljs"); // Tambahkan YAMLJS
const swaggerUi = require("swagger-ui-express"); // Tambahkan Swagger UI

// Import Routes
const authRoutes = require("./routes/authRoutes");
const addressRoutes = require("./routes/addressRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const brandRoutes = require("./routes/brandRoutes");
const orderItemRoutes = require("./routes/orderItemRoutes"); // New
const orderRoutes = require("./routes/orderRoutes"); // New
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Apply CORS middleware
app.use(cors());

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Load Swagger documentation
const swaggerDocument = YAML.load('./swagger.yaml'); // File YAML Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Swagger route

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/order-items", orderItemRoutes); // New
app.use("/api/orders", orderRoutes); // New
app.use("/api/reviews", reviewRoutes); // New

// 404 Handler
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
