const express = require("express");
const path = require("path");

// const rootDir = require("../utils/path");
const router = express.Router();
const {getAddProduct, postAddProduct, getProducts, getEditProduct, postEditProduct} = require('../controllers/admin')

router.get("/add-product", getAddProduct)

router.post("/add-product", postAddProduct);

router.get("/products", getProducts)

router.get('/edit-product/:id', getEditProduct)
router.post('/edit-product/', postEditProduct)
// module.exports = router
exports.adminRoutes = router;
