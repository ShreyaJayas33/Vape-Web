require("dotenv").config();              // ✅ Loads environment variables
const express = require("express");      // ✅ Express for web server
const cors = require("cors");            // ✅ Enables CORS
const multer = require("multer");        // ✅ (Ready for file uploads)
const { Pool } = require("pg");          // ✅ PostgreSQL client

const app = express();
const PORT = process.env.PORT || 5055;

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));       // ✅ Serves files from /public

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

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("🚀 Vape Web backend is running on port " + PORT);
});

// ✅ API Routes
const testRoutes = require("./routes/testRoutes");
app.use("/api", testRoutes);

const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

const cartRoutes = require("./routes/cart");
app.use("/api/cart", cartRoutes);

const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);


// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🌐 Server is listening on http://localhost:${PORT}`);
});

console.log("✅ DB user from .env:", process.env.DB_USER);
