const {Product} = require('../models/product')
const {Cart} = require('../models/cart')


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
const getOrders = (req, res, next ) => {
  res.render('shop/order',{
    active: "orders",
    pageTitle: "Your Orders"

  })
}

const getCheckout = (req, res, next) => {
  res.render('shop/checkout',{
    active: 'checkout',
    pageTitle: "Checkout!"

  })
}

const getPoduct = (req, res, next) => {
  const {id} = req.params;
  Product.findbyId(id,(p)=> {
    console.log('from cb',p)
    res.render('shop/product-detail.ejs',{
      product: p,
      pageTitle: "Product Details!",
      active: "product",
    })
  })
  // res.redirect('/')
}
const postCart = (req,res,next) =>{
  const {productId}=req.body
  Product.findbyId(productId, (product)=>{
    console.log('productId:', productId)
    console.log("product:",product)
    Cart.addProduct(productId, product.price)
  })  
  res.redirect('/cart')
}

module.exports = {
  getProducts,
  getindex,
  getCart,
  postCart,
  getCheckout,
  getOrders,
  getPoduct
};