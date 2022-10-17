const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
// const http = require('http')

const app = express();

// app.use((req,res,next)=> {
//     console.log("this allways runs")
//     next()
// })
// app.use((req, res, next) => {
//     console.log("in the middleware")
//     next()
// })

//We must add this middleware to have acces to req.body|| extened false shoud parse none default features 
app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes)
app.use(shopRoutes)

app.use('/', (req, res, next) => {
    // next()
    return res.send('<h2> Default Page </h2>')
})



app.listen(3001)
// const server = http.createServer(app)
// server.listen(3001)