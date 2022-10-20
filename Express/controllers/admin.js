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
      editing: false,

    });
  };

  const getEditProduct = (req, res, next)=> {

    // const {edit} = req.params

    // if( edit != true){
    //   return res.redirect('/')
    // }
    const {id} = req.params
    Product.findbyId(id, product => {
      // if(product) res.redirect('/')
      res.render("admin/edit-product", {
        pageTitle: "Add product!",
        active: "adminEdit",
        editing: "true",
        product: product
      });
    })
  };
  

  const postAddProduct = (req, res, next) => {
    const { title, description, price, image  } = req.body;
    console.log("postAddProduct function")
    const product = new Product(null,title, image, description, price)
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

  const postEditProduct = (req, res, next) =>{
    const {id,title,description,price,image} = req.body
    console.log(id,title,description,price,image)
    const update = new Product(id,title,image,description,price)
    update.save()
    res.redirect('/admin/products')
  }

  module.exports = {
    postAddProduct,
    getAddProduct,
    getProducts,
    getEditProduct,
    postEditProduct
  }