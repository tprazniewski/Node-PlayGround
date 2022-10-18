const express = require('express')
const router = express.Router();
const rootDir =  require('../utils/path')
const path = require('path')


router.get('/users', (req, res) => {
    res.sendFile(path.join(rootDir,'views', 'users.html'))
})

module.exports = router