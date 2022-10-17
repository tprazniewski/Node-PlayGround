const express = require('express')
const bodyParser = require('body-parser')
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

//We must add this middleware to have acces to req.body
app.use(bodyParser.urlencoded())

app.use('/add-product', (req, res, next) => {
    return res.send(` <form action='/product' method='POST'> <input type='text' name='title'> <button type='submit'> Send</button>  </form>`)
})

app.post('/product', (req, res, next) => {

    console.log(req.body)
    res.redirect('/')
    // next()
})

app.use('/', (req, res, next) => {
    // next()
    return res.send('<h2> Home Page </h2>')
})



app.listen(3001)
// const server = http.createServer(app)
// server.listen(3001)