const {Product} = require('../models/product')
const getAddProduct = (req, res) => {
    // return res.sendFile(path.join(rootDir,'views', 'add-product.html'))
    // return res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // return res.send(` <form action='/admin/product' method='POST'> <input type='text' name='title'> <button type='submit'> Send</button>  </form>`)
  
    res.render("add-product", {
      pageTitle: "Add product!",
      active: "admin",
      formsCSS: true,
      productCSS: true,
      activeProduct: true,
    });
  };


  const postAddProduct = (req, res, next) => {
    const { title } = req.body;
    console.log({ title });
    const product = new Product(title)
    product.save()
    // products.push({ title });
    res.redirect("/");
  
    // next()
  }

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
    Product.findAll((products)=>{
          res.render("shop", {
            productList: products,
            pageTitle: "Shopping!",
            active: "shop",
            isProduct: products.length > 0,
            activeShop: true,
            productCSS: true
          });
    })

  }



module.exports = {
    getAddProduct,
    postAddProduct,
    getProducts
}