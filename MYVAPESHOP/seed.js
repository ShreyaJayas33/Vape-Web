require("dotenv").config();
const pool = require("./db");
const seedProducts = async () => {
  try {
    await pool.query("DELETE FROM products");

    const sampleProducts = [
      {
        name: "Cool Mint",
        description: "Refreshing menthol vape",
        category_id: 1,
        image_path: "images/mint.jpg",
        price: 14.99,
      },
      {
        name: "Strawberry Ice",
        description: "Sweet with a frosty finish",
        category_id: 2,
        image_path: "images/strawberry.jpg",
        price: 13.49,
      },
      {
        name: "Blueberry Chill",
        description: "Tart blueberry with ice",
        category_id: 2,
        image_path: "images/blueberry.jpg",
        price: 15.25,
      },
    ];

    for (let product of sampleProducts) {
      await pool.query(
        `INSERT INTO products (name, description, category_id, image_path, price)
         VALUES ($1, $2, $3, $4, $5)`,
        [product.name, product.description, product.category_id, product.image_path, product.price]
      );
    }

    console.log("✅ Sample products inserted!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err.message);
    process.exit(1);
  }
};

seedProducts();
