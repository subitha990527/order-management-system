const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/create", orderController.createOrder);
router.get("/all", orderController.getAllOrders);
router.get("/most-ordered", orderController.getMostOrderedProducts);
router.get("/monthly-revenue", orderController.getMonthlyRevenue);

module.exports = router;