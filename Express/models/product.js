const products = []
 
const Product = class Product {

    constructor(titl) {
        this.title=titl
    }

    // function save() { } 
    save() {
        products.push(this)
    }

    static findAll() {
        return products
    }

}

module.exports = {
    Product
}