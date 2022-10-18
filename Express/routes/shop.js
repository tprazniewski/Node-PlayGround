const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const { products } = require("./admin");

const router = express.Router();
router.get("/", (req, res, next) => {
  // res.send('<h1> Hello from Shope Routes </h1>')
  // res.sendFile(path.join(__dirname,'..',  'views', 'shop.html'))

  // --------------------------------------------------------------------------------------------
  // console.log('from shop',products)
  // return res.sendFile(path.join(rootDir,'views', 'shop.html'))
  // --------------------------------------------------------------------------------------------
  res.render("shop", {
    productList: products,
    pageTitle: "Shopping!",
    active: "shop",
    isProduct: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
