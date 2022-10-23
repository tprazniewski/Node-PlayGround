const { Product } = require("../models/product");
const { Cart } = require("../models/cart");

const getProducts = async (req, res, next) => {
  Product.findAll()
    .then((product) => {
      console.log(product)
      res.render("shop/product-list", {
        productList: product,
        pageTitle: "app Products!",
        active: "product"
      });
    })
    
    .catch((err) => console.log(err));
};

const getindex = (req, res, next) => {
  Product.findAll()
    .then((product) => {
      console.log(product)
      res.render("shop/index", {
        productList: product,
        pageTitle: "Shopping!",
        active: "shop"
      });
    })
    
    .catch((err) => console.log(err));
};

const getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.findAll((products) => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({
            productDAta: product,
            quantity: cartProductData.quantity,
          });
        }
      }
      res.render("shop/cart", {
        active: "cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};
const getOrders = (req, res, next) => {
  res.render("shop/order", {
    active: "orders",
    pageTitle: "Your Orders",
  });
};

const getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    active: "checkout",
    pageTitle: "Checkout!",
  });
};

const getPoduct = (req, res, next) => {
  const { id } = req.params;
  Product.findbyId(id)
    .then(([p]) => {
      res.render("shop/product-detail.ejs", {
        product: p[0],
        pageTitle: p[0].title,
        active: "product",
      });
    })
    .catch((err) => console.log(err));
  // res.redirect('/')
};
const postCart = (req, res, next) => {
  const { productId } = req.body;
  Product.findbyId(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect("/cart");
};

const postCartDelete = (req, res, next) => {
  const { id } = req.body;
  console.log("id", id);
  Product.findbyId(id, (product) => {
    Cart.deleteProduct(id, product.price);
    res.redirect("/cart");
  });
};

module.exports = {
  getProducts,
  getindex,
  getCart,
  postCart,
  getCheckout,
  getOrders,
  getPoduct,
  postCartDelete,
};
