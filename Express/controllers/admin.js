const { Product } = require("../models/product");

const getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add product!",
    active: "admin",
    formsCSS: true,
    productCSS: true,
    activeProduct: true,
    editing: false,
  });
};

const getEditProduct = (req, res, next) => {
  const { id } = req.params;
  Product.findByPk(id)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }

      res.render("admin/edit-product", {
        pageTitle: "Add product!",
        active: "adminEdit",
        editing: "true",
        product: product,
      });
    })
    .catch((err) => console.log(err));
};

const postAddProduct = (req, res, next) => {
  const { title, description, price, image } = req.body;
  Product.create({ title, price, image, description })
    .then((res) => console.log("crested Product"))
    .catch((err) => console.log(err));
};

const getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        productList: products,
        pageTitle: "Admin Products!",
        active: "admProducts",
      });
    })
    .catch((err) => console.log(err));
};

const postEditProduct = (req, res, next) => {
  const { id, title, description, price, image } = req.body;
  const update = new Product(id, title, image, description, price);
  Product.findByPk(id)
    .then((product) => {
      product.title = title,
      product.description = description,
      product.price = price
      product.image = image
      return product.save()
    })
    .then(p => console.log(p))
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/admin/products");
};

const deleteEditProduct = (req, res, next) => {
  const { id } = req.body;
  Product.delete(id);
  res.redirect("/admin/products");
};

module.exports = {
  postAddProduct,
  getAddProduct,
  getProducts,
  getEditProduct,
  postEditProduct,
  deleteEditProduct,
};
