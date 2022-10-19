const express = require('express')
const router = express.Router()
const users = []

router.get('/users', (req, res) => {
    res.render('users', {
        usersList: users
    })
})
router.post('/users', (req, res) => {
    const {name, surname} = req.body

    users.push({ name: name, surname: surname})
    console.log(users)
    res.redirect('/users')
})

module.exports = router