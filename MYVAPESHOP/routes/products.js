const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

// 🔍 Search and filter
router.get("/search", controller.search);
router.get("/category/:category_id", controller.filterByCategory);

// ✅ Add product (important for Postman test)
router.post("/", controller.createProduct);  //added line!

// 📦 Product views
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);

module.exports = router;
