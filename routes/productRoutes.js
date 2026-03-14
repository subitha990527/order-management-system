const express = require("express");
const router = express.Router();

const controller = require("../controllers/productController");

router.post("/add", controller.addProduct);

router.put("/status/:id", controller.updateProductStatus);

router.get("/faulty", controller.getFaultyProducts);

module.exports = router;