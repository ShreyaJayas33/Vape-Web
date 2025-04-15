const model = require("../models/adminModel");

// ✅ Add product
const add = async (req, res) => {
  try {
    const { name, description, category_id, image_path, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: "Missing name or price" });
    }

    const newProduct = await model.addProduct({ name, description, category_id, image_path, price });
    res.status(201).json({ message: "Product added", product: newProduct });
  } catch (err) {
    console.error("❌ Error adding product:", err.message);
    res.status(500).json({ error: "Failed to add product" });
  }
};

// ✅ Update product
const update = async (req, res) => {
  try {
    const updated = await model.updateProduct(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Product updated", product: updated });
  } catch (err) {
    console.error("❌ Error updating product:", err.message);
    res.status(500).json({ error: "Failed to update product" });
  }
};

// ✅ Bulk upload
const bulk = async (req, res) => {
  try {
    const products = req.body;
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: "Bulk upload must be an array" });
    }

    const added = await model.bulkUpload(products);
    res.status(201).json({ message: `${added.length} products uploaded`, products: added });
  } catch (err) {
    console.error("❌ Bulk upload failed:", err.message);
    res.status(500).json({ error: "Bulk upload failed" });
  }
};

module.exports = {
  add,
  update,
  bulk,
};
