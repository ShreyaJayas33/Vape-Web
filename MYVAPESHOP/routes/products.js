/**
 * Name: Shreya Jayas
 * Date: 05.08.2025
 * CSC 372-01
 *
 * This is the route definition for product-related endpoints.
 * It defines routes for product listing, search, filtering, and details using EJS or JSON.
 */

const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

// 🔍 Search and filter
router.get("/search", controller.search);
router.get("/category/:category_id", controller.filterByCategory);

// ✅ Add product (important for Postman test)
router.post("/", controller.createProduct);

// ✅ Product Views
router.get("/json", controller.getAllJSON); // ✅ MUST be above `/:id`
router.get("/pug", controller.getAllPug);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne); // 🔴 Keep this LAST

module.exports = router;
