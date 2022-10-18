const express = require('express')
const path = require('path')

const rootDir = require('../utils/path')
const router = express.Router();

const products = [];
router.get('/add-product', (req, res, next) => {
        return res.sendFile(path.join(rootDir,'views', 'add-product.html'))
        // return res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // return res.send(` <form action='/admin/product' method='POST'> <input type='text' name='title'> <button type='submit'> Send</button>  </form>`)
})

router.post('/add-product', (req, res, next) => {
    const {title} = req.body
    console.log({title})
    products.push({title})
    res.redirect('/')
    // next()
})

// module.exports = router
exports.adminRoutes = router;
exports.products = products;
