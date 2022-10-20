const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const p = path.join(rootDir, "data", "cart.json");


const Cart = class Cart { 
    static addProduct(id,productPrice){
        fs.readFile(p,(err,content)=>{
            let cart = {products: [], totalPrice: 0}
            if(!err) {
                cart=JSON.parse(content)
            }
            const existingProductIndex = cart.products.findIndex((p)=> p.id === id)
            const existingProduct = cart.products[existingProductIndex]
            let updatedProduct;
            if(existingProduct){
                updatedProduct={...existingProduct}
                // updatedProduct.quantity = updatedProduct.quantity +1
                updatedProduct.quantity += 1 
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct
            }
            else{
                updatedProduct = {id, quantity: 1}
                cart.products = [...cart.products, updatedProduct]
            }
            // cart.totalPrice = cart.totalPrice + productPrice
            cart.totalPrice +=  +productPrice
            console.log('cart',cart)
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
              });
            
        })
    }

}

module.exports = {
    Cart
}