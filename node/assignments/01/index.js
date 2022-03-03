const http = require('http');
const fs = require('fs');

const port = 3000;

const page404 = fs.readFileSync('./404.html', (err, data) => {
    if(err) {
        console.log(err)
    }
    return data;
})

const server = http.createServer((req, res) => {
    const filename = req.url === '/' ? __dirname + '/index.html' : __dirname + `${req.url}.html`;
    console.log(req.url)
    fs.readFile(filename, (err, data) => {
        if(err) {
            res.writeHead(404)
            return res.end(page404)
        }
        res.writeHead(200)
        return res.end(data)
    })
})

server.listen(3000, () => {
    console.log(`Server running on localhost:${port}.`)
})