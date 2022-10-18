const express = require('express')
const bodyParser = require('body-parser')
const {adminRoutes, products} = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')
const rootDir = require('./utils/path')
const { dirname } = require('path')
// const http = require('http')

const app = express();
//We tell express wtich engine we gonna use to compile our html templates
app.set('view engine', 'pug')
//the second argument is views as edault || show swhere the tempates can be found
app.set('views', 'views')
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
//Create a root path for static files so easier to imper files from that folder in html files!!Read only!! 
app.use(express.static(path.join(rootDir,'public')))

app.use(('/admin'), adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'))

    res.status(404).render('404')
})




app.listen(3001)
// const server = http.createServer(app)
// server.listen(3001)