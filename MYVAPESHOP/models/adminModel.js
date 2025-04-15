const pool = require("../db");

// ✅ Add new product
const addProduct = async ({ name, description, category_id, image_path, price }) => {
  const result = await pool.query(
    `INSERT INTO products (name, description, category_id, image_path, price)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, description, category_id, image_path, price]
  );
  return result.rows[0];
};

// ✅ Update product
const updateProduct = async (id, updatedData) => {
  const { name, description, category_id, image_path, price } = updatedData;

  const result = await pool.query(
    `UPDATE products
     SET name = $1, description = $2, category_id = $3, image_path = $4, price = $5
     WHERE product_id = $6
     RETURNING *`,
    [name, description, category_id, image_path, price, id]
  );
  return result.rows[0];
};

// ✅ Bulk upload products
const bulkUpload = async (productList) => {
  const inserted = [];

  for (let product of productList) {
    const { name, description, category_id, image_path, price } = product;

    const result = await pool.query(
      `INSERT INTO products (name, description, category_id, image_path, price)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, description, category_id, image_path, price]
    );

    inserted.push(result.rows[0]);
  }

  return inserted;
};

module.exports = {
  addProduct,
  updateProduct,
  bulkUpload,
};
