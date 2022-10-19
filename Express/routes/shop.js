const express = require("express");
const path = require("path");
const {getProducts, getindex, getCart, getCheckout, getOrders,getPoduct } = require('../controllers/shop')

const router = express.Router();
router.get("/", getindex);
router.get('/products', getProducts)
router.get('/products/:id', getPoduct)
router.get('/cart', getCart )
router.get('/orders', getOrders )
router.get('/checkout', getCheckout )

module.exports = router;
