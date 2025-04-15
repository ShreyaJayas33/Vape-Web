const model = require("../models/cartModel");

// ✅ View all cart items
const getAll = async (req, res) => {
  try {
    const items = await model.getCartItems();
    res.json(items);
  } catch (err) {
    console.error("❌ Error fetching cart:", err.message);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};

// ✅ Add item to cart
const add = async (req, res) => {
  const { product_id, quantity } = req.body;
  if (!product_id || !quantity) {
    return res.status(400).json({ error: "Missing product_id or quantity" });
  }

  try {
    const item = await model.addToCart(product_id, quantity);
    res.status(201).json(item);
  } catch (err) {
    console.error("❌ Error adding to cart:", err.message);
    res.status(500).json({ error: "Failed to add item to cart" });
  }
};

// ✅ Remove cart item
const remove = async (req, res) => {
  try {
    const item = await model.removeFromCart(req.params.cart_id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item removed", item });
  } catch (err) {
    console.error("❌ Error removing item:", err.message);
    res.status(500).json({ error: "Failed to remove item" });
  }
};

// ✅ Clear the cart (checkout)
const checkout = async (req, res) => {
  try {
    await model.clearCart();
    res.json({ message: "Checkout successful. Cart cleared." });
  } catch (err) {
    console.error("❌ Checkout error:", err.message);
    res.status(500).json({ error: "Checkout failed" });
  }
};

module.exports = {
  getAll,
  add,
  remove,
  checkout,
};
