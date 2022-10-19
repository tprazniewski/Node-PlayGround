const {Product} = require('../models/product')


const getProducts = async (req, res, next) => {
  // res.send('<h1> Hello from Shope Routes </h1>')
  // res.sendFile(path.join(__dirname,'..',  'views', 'shop.html'))

  // --------------------------------------------------------------------------------------------
  // console.log('from shop',products)
  // return res.sendFile(path.join(rootDir,'views', 'shop.html'))
  // --------------------------------------------------------------------------------------------
  //V1

  // const products = await Product.findAll()
  // const products2 = JSON.parse(products)

  // console.log(products2.length)
  // console.log('controllers>products> getProducts:',products2)
  // res.render("shop", {
  //   productList: products2,
  //   pageTitle: "Shopping!",
  //   active: "shop",
  //   isProduct: products2.length > 0,
  //   activeShop: true,
  //   productCSS: true
  // });

  // --------------------------------------------------------------------------------------------
  //V2
  Product.findAll((products) => {
    res.render("shop/product-list", {
      productList: products,
      pageTitle: "Shopping!",
      active: "shop",
      //for handlepars views engine
      // isProduct: products.length > 0,
      // activeShop: true,
      // productCSS: true,
    });
  });
};

const getindex = (req, res, next) => {
  Product.findAll((products) => {
    res.render("shop/index", {
      productList: products,
      pageTitle: "Shopping!",
      active: "shop",
      //for handlepars views engine
      // isProduct: products.length > 0,
      // activeShop: true,
      // productCSS: true,
    });
  });
};

const getCart = (req, res, next ) => {
  res.render('shop/cart',{
    active: "cart",
    pageTitle: "Your Cart"

  })
}

const getCheckout = (req, res, next) => {
  res.render('shop/checkout',{
    active: 'checkout',
    pageTitle: "Checkout!"

  })
}

module.exports = {
  getProducts,
  getindex,
  getCart,
  getCheckout
};
