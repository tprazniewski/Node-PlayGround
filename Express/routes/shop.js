const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')

const router = express.Router()
router.get('/', (req, res, next) =>{
    // res.send('<h1> Hello from Shope Routes </h1>')
    // res.sendFile(path.join(__dirname,'..',  'views', 'shop.html'))
    return res.sendFile(path.join(rootDir,'views', 'shop.html'))
})


module.exports = router