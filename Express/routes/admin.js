const express = require('express')
const path = require('path')

const router = express.Router();

router.get('/add-product', (req, res, next) => {
        return res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // return res.send(` <form action='/admin/product' method='POST'> <input type='text' name='title'> <button type='submit'> Send</button>  </form>`)
})

router.post('/add-product', (req, res, next) => {

    console.log(req.body)
    res.redirect('/')
    // next()
})

module.exports = router