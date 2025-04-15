const pool = require("../db");

// ✅ Get all cart items (joined with product info)
const getCartItems = async () => {
  const result = await pool.query(`
    SELECT c.cart_id, c.product_id, c.quantity, p.name, p.price, p.image_path
    FROM cart c
    JOIN products p ON c.product_id = p.product_id
    ORDER BY c.cart_id DESC
  `);
  return result.rows;
};

// ✅ Add product to cart
const addToCart = async (product_id, quantity) => {
  const result = await pool.query(
    "INSERT INTO cart (product_id, quantity) VALUES ($1, $2) RETURNING *",
    [product_id, quantity]
  );
  return result.rows[0];
};

// ✅ Remove item by cart_id
const removeFromCart = async (cart_id) => {
  const result = await pool.query("DELETE FROM cart WHERE cart_id = $1 RETURNING *", [cart_id]);
  return result.rows[0]; // returns deleted item if it existed
};

// ✅ Clear the cart
const clearCart = async () => {
  await pool.query("DELETE FROM cart");
  return true;
};

module.exports = {
  getCartItems,
  addToCart,
  removeFromCart,
  clearCart,
};
