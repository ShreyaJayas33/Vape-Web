require("dotenv").config(); // ✅ Loads environment variables
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { Pool } = require("pg");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5055;

// ✅ View Engine Support for BOTH EJS (Step 2) and Pug (Step 3)
app.engine("ejs", require("ejs").__express);
app.engine("pug", require("pug").__express);
app.set("views", [
  path.join(__dirname, "views"),      // EJS Views
  path.join(__dirname, "views-pug")   // Pug Views
]);
app.set("view engine", "ejs"); // Default view engine (won't break step 2)
console.log("✅ Views set to:", app.get("views"));

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ✅ PostgreSQL Pool Setup
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// ✅ DB connection test
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("✅ Connected to PostgreSQL via DBeaver");
  release();
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("🚀 Vape Web backend is running on port " + PORT);
});

// ✅ Route registration
const testRoutes = require("./routes/testRoutes");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const adminRoutes = require("./routes/admin");

if (testRoutes) app.use("/api", testRoutes);
if (productRoutes) app.use("/api/products", productRoutes);
if (cartRoutes) app.use("/api/cart", cartRoutes);
if (adminRoutes) app.use("/api/admin", adminRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🌐 Server is listening on http://localhost:${PORT}`);
});
console.log("✅ DB user from .env:", process.env.DB_USER);
