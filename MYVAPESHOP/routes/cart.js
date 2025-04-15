const express = require("express");
const router = express.Router();
const controller = require("../controllers/cartController");

router.get("/", controller.getAll);
router.post("/", controller.add);
router.delete("/:cart_id", controller.remove);
router.post("/checkout", controller.checkout);

module.exports = router;
