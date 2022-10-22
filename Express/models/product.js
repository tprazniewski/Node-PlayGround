const db = require('../DB/mySql')

const {Cart} = require('./cart')

const Product = class Product {
  constructor(id,t,img, desc, price ) {
    this.id = id
    this.title = t;
    this.image = img;
    this.description = desc;
    this.price = price
  }

  // function save() { }
  save() {
    return db.execute('INSERT INTO products (title,price,image_url,description) VALUES (?,?,?,?)',
    [this.title, this.price, this.image, this.description]         
    )
  }

  static delete(id) {

  }

  static  findAll() {
    return db.execute('SELECT * FROM products')
    
  };

  static  findbyId(id) {

    }
}


module.exports = {
  Product
};
