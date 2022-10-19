const express = require('express')
const routerHome = require('./routes/home')
const routerUsers = require('./routes/users')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended: false}))

app.use(routerHome)
app.use(routerUsers)

app.listen(3010)