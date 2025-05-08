const model = require("../models/productsModel");

// ✅ JSON for static HTML fetch (Step 2)
const getAllJSON = async (req, res) => {
  try {
    const data = await model.getAllProducts();
    res.json(data); // ✅ Must return JSON for products.html
  } catch (err) {
    console.error("❌ JSON fetch error:", err.message);
    res.status(500).json({ error: "Failed to load products" });
  }
};

// ✅ EJS view (Step 2 - server-rendered)
const getAll = async (req, res) => {
  try {
    const data = await model.getAllProducts();
    res.render("products", { products: data });
  } catch (err) {
    console.error("❌ Error getting all products:", err.message);
    res.status(500).send("Error loading products page");
  }
};

// ✅ Pug view (Step 3)
const getAllPug = async (req, res) => {
  try {
    console.log("🛠️ [PUG] Controller hit: getAllPug");
    const data = await model.getAllProducts();
    console.log("📦 [PUG] Fetched products from DB:", data.length);

    const galleryItems = [
      "WHAT'S NEW!", "PRODUCTS UNDER $100", "BONGS", "DAB RIGS",
      "HEADY AMERICAN GLASS", "HAND PIPES", "BUBBLERS / SHERLOCKS",
      "BANGERS / NAILS", "BOWLS / SLIDES", "GRINDERS",
      "BUBBLE CAPS & CARBS", "PENDANTS AND JEWELRY", "MARBLES & PEARLS",
      "DABBING TORCHES", "DAB TOOLS", "DOWNSTEMS", "ASH CATCHERS",
      "SILICONE", "CERAMICS", "NECTAR COLLECTORS"
    ];

    res.render("products", { products: data, galleryItems });
  } catch (err) {
    console.error("❌ Error rendering Pug view:", err.message);
    res.status(500).send("Error loading products page");
  }
};

// ✅ Controller: Get one product by ID
const getOne = async (req, res) => {
  try {
    const product = await model.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error("❌ Error getting product:", err.message);
    res.status(500).json({ error: "Error fetching product" });
  }
};

// ✅ Controller: Search products
const search = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ error: "Missing search query" });

    const results = await model.searchProducts(query);
    res.json(results);
  } catch (err) {
    console.error("❌ Search error:", err.message);
    res.status(500).json({ error: "Search failed" });
  }
};

// ✅ Controller: Filter products by category
const filterByCategory = async (req, res) => {
  try {
    const results = await model.getProductsByCategory(req.params.category_id);
    res.json(results);
  } catch (err) {
    console.error("❌ Category filter error:", err.message);
    res.status(500).json({ error: "Category filter failed" });
  }
};

// ✅ Controller: Add a new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category_id } = req.body;
    if (!name || !description || !price || !category_id) {
      return res.status(400).json({ error: "Missing required product fields" });
    }

    const validCategories = [1, 2];
    if (!validCategories.includes(parseInt(category_id))) {
      return res.status(400).json({ error: "Invalid category ID" });
    }

    const image_path = req.body.image_path || "images/default.jpg";
    const result = await model.addProduct({ name, description, price, category_id, image_path });
    res.status(201).json({ success: true, product: result });
  } catch (err) {
    console.error("❌ Error creating product:", err);
    res.status(500).json({ error: "Failed to add product" });
  }
};

module.exports = {
  getAllJSON,       // ✅ new: JSON for HTML
  getAll,           // ✅ EJS
  getAllPug,        // ✅ Pug
  getOne,
  search,
  filterByCategory,
  createProduct,
};
