const pool = require("../db");

// ✅ Get all products
const getAllProducts = async () => {
  const result = await pool.query("SELECT * FROM products ORDER BY product_id DESC");
  return result.rows;
};

// ✅ Get one product by ID
const getProductById = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE product_id = $1", [id]);
  return result.rows[0];
};

// ✅ Search products by name or description
const searchProducts = async (query) => {
  const result = await pool.query(
    "SELECT * FROM products WHERE name ILIKE $1 OR description ILIKE $1",
    [`%${query}%`]
  );
  return result.rows;
};

// ✅ Filter products by category ID
const getProductsByCategory = async (categoryId) => {
  const result = await pool.query(
    "SELECT * FROM products WHERE category_id = $1",
    [categoryId]
  );
  return result.rows;
};

module.exports = {
  getAllProducts,
  getProductById,
  searchProducts,
  getProductsByCategory,
};
