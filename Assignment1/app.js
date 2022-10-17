const http = require('http')


const server = http.createServer((req,res) => {
    const {url, method} = req

    if( url === '/') {
        res.statusCode= 302
        res.setHeader('Content-type', 'text/html')
        res.write(`<html> <body> <h1> Home Route </h1> <form action='/create-user' method='POST'> <input type='text' name='input' > <button type='submit'> Send User</button> </form> </body> </html>`)
        res.end()
    }

    if( url==='/create-user' && method==='POST') {
        console.log("weszlo")

        const body = []
        req.on('data',(chunk) => {
            body.push(chunk)
        })
    
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString().split('=')[1];
            console.log(parseBody)
            res.statusCode= 302
            res.setHeader('Location', '/users')
            res.end()
        })
    }

    if( url === '/users') {
        res.statusCode= 302
        res.setHeader('Content-type', 'text/html')
        res.write('<html> <body> <ul> <li> First User </li> <li> Second User </li></ul> </body> </html>')
        res.end()
    }
})

server.listen(3000)