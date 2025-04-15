const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.get("/search", controller.search);
router.get("/category/:category_id", controller.filterByCategory);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);

module.exports = router;
