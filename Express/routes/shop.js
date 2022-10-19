const express = require("express");
const path = require("path");
const {getProducts, getindex, getCart, getCheckout } = require('../controllers/shop')

const router = express.Router();
router.get("/", getindex);
router.get('/products', getProducts)
router.get('/cart', getCart )
router.get('/checkout', getCheckout )

module.exports = router;
