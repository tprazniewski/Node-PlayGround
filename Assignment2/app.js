const express = require('express')
const homeRoute = require('./routes/home')
const usersRoute = require('./routes/users')
const path = require('path')
const rootDir = require('./utils/path')

const app = express()

app.use(express.static(path.join(rootDir,'public')))

app.use(homeRoute)
app.use(usersRoute)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})
app.listen(3005)