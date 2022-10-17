const http = require('http')
const fs = require('fs')
const routes = require('./routes')

// function rqListner(req,res) {}
// const rqListner = (req, res) => {}

const server = http.createServer(routes);

server.listen(3000)