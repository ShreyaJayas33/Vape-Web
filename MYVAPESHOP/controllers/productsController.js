const model = require("../models/productsModel");

// ✅ Controller: Get all products
const getAll = async (req, res) => {
  try {
    const data = await model.getAllProducts();
    // res.json(data); // ❌ removed for step 2 (project)
    res.render("products", { products: data }); // ✅ part added for step 2 (project)
  } catch (err) {
    console.error("❌ Error getting all products:", err.message);
    // res.status(500).json({ error: "Error fetching products" }); // ❌ removed for step 2 (project)
    res.status(500).send("Error loading products page"); // ✅ part added for step 2 (project)
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

// ✅ Controller: Add a new product (used with Postman)
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category_id } = req.body;

    // Basic validation
    if (!name || !description || !price || !category_id) {
      return res.status(400).json({ error: "Missing required product fields" });
    }

    // Only allow category IDs that actually exist (based on your DB)
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
  getAll,
  getOne,
  search,
  filterByCategory,
  createProduct,
};
