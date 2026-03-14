const express = require("express");
const router = express.Router();

const manufacturerController = require("../controllers/manufacturerController");

router.post("/add", manufacturerController.addManufacturer);

module.exports = router;