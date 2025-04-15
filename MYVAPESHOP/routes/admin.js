const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.post("/products", controller.add);
router.put("/products/:id", controller.update);
router.post("/products/bulk", controller.bulk);

module.exports = router;
