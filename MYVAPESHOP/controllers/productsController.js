const model = require("../models/productsModel");

// ✅ Controller: Get all products
const getAll = async (req, res) => {
  try {
    const data = await model.getAllProducts();
    res.json(data);
  } catch (err) {
    console.error("❌ Error getting all products:", err.message);
    res.status(500).json({ error: "Error fetching products" });
  }
};

// ✅ Controller: Get one product
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

// ✅ Controller: Search
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

// ✅ Controller: Filter by category
const filterByCategory = async (req, res) => {
  try {
    const results = await model.getProductsByCategory(req.params.category_id);
    res.json(results);
  } catch (err) {
    console.error("❌ Category filter error:", err.message);
    res.status(500).json({ error: "Category filter failed" });
  }
};

module.exports = {
  getAll,
  getOne,
  search,
  filterByCategory,
};
