const fs = require('fs')


 const requestHandler = (req,res) => {
    const {url, method} = req

    if(url==='/'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`<html> <head> <body>  <form action='/message' method="POST"> <input type='text' name='message'> <button type='submit'> Send</button> </form> </body> </head> </html>`) 
        return res.end()
    }

    if(url=== '/message' && method==='POST'){
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })

       return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody)
            const message = parseBody. split('=')[1]
            // fs.writeFileSync('message.txt', message)
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode= 302
                res.setHeader('Location','/')
                return res.end()

            } )
        })
    }
    // console.log(req) 
    //process.exit()
    res.setHeader('Content-Type', 'text/html')
    res.write('<html> <head> <body>  <h1> Elomanooo </h1> </body> </head> </html>')
    res.end()

}

module.exports = requestHandler