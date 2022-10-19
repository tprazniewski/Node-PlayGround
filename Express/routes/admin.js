const express = require("express");
const path = require("path");

// const rootDir = require("../utils/path");
const router = express.Router();
const {getAddProduct, postAddProduct} = require('../controllers/products')

router.get("/add-product", getAddProduct)

router.post("/add-product", postAddProduct);

// module.exports = router
exports.adminRoutes = router;
