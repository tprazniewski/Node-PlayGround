const express = require("express");
const path = require("path");

// const rootDir = require("../utils/path");
const router = express.Router();
const {getAddProduct, postAddProduct, getProducts} = require('../controllers/admin')

router.get("/add-product", getAddProduct)

router.post("/add-product", postAddProduct);

router.get("/products", getProducts)
// module.exports = router
exports.adminRoutes = router;
