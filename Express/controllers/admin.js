const {Product} = require('../models/product')


const getAddProduct = (req, res) => {
    // return res.sendFile(path.join(rootDir,'views', 'add-product.html'))
    // return res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // return res.send(` <form action='/admin/product' method='POST'> <input type='text' name='title'> <button type='submit'> Send</button>  </form>`)
  
    res.render("admin/add-product", {
      pageTitle: "Add product!",
      active: "admin",
      formsCSS: true,
      productCSS: true,
      activeProduct: true,
    });
  };


  const postAddProduct = (req, res, next) => {
    const { title, description, price, image  } = req.body;
    console.log("postAddProduct function")
    const product = new Product(title, image, description, price)
    product.save()
    // products.push({ title });
    res.redirect("/");
  
    // next()
  }

  const getProducts = (req, res, next) => {
    Product.findAll((products) => {
        res.render("admin/products", {
          productList: products,
          pageTitle: "Admin Products!",
          active: "admProducts"
        });
      });
  }

  module.exports = {
    postAddProduct,
    getAddProduct,
    getProducts
  }