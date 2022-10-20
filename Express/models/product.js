const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

const products = [];
const p = path.join(rootDir, "data", "products.json");

const getAllProducts = (cb)=>{
    fs.readFile(p,(err,data) =>{
      if (err){
      cb([])
      }
      else {
      cb(JSON.parse(data))
      }
  })
}


const Product = class Product {
  constructor(t,img, desc, price ) {
    this.title = t;
    this.image = img;
    this.description = desc;
    this.price = price
  }

  // function save() { }
  save() {
    this.id = Math.random().toString()
    // products.push(this);
    fs.readFile(p,(err, data)=> {
        let products = []
        if(!err){
            products = JSON.parse(data)
        }
        // to be sure this refers to the class object we need to use in fs.readFile an arrow function not a normal function)
        products.push(this)
        fs.writeFile(p,JSON.stringify(products), (err) => {
            console.log('writeFile:', err)
        })
    })
  }

  static  findAll(cb) {
    // --------------------------------------------------------------------------------------------------
    //V1
    // const prod = fs.readFileSync(p, (err,data)=>{
    //     if(err){
    //         return []
    //     }
    //     console.log('models>products',JSON.parse(data))
    //     return JSON.parse(data)
    // })
    // return prod;
    // --------------------------------------------------------------------------------------------------
    //V2
  //   fs.readFile(p,(err,data) =>{
  //       if (err){
  //        cb([])
  //       }
  //       else {
  //        cb(JSON.parse(data))
  //       }
  //   })
    
  // }
  // static findById(id,cb){

  // }
  // --------------------------------------------------------------------------------------------------
  getAllProducts(cb)
};

static  findbyId(id,cb) {
    getAllProducts(products => {
      const product = products.find(product => product.id === id)
      cb(product)
    })
  }
}


module.exports = {
  Product,
};
