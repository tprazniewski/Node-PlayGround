const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')
const rootDir = require('./utils/path')
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

app.use(('/admin'), adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'))
})




app.listen(3001)
// const server = http.createServer(app)
// server.listen(3001)