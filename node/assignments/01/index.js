const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;

const server = http.createServer((req, res) => {
    let requestedUrl = url.parse(req.url);
    if(requestedUrl.pathname === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('<h1>Error 404</h1><p>Page not found.</h1>')
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            return res.end()
        })
    } else if(requestedUrl.pathname === '/about.html') {
        fs.readFile('./about.html', (err, data) => {
            if(err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('<h1>Error 404</h1><p>Page not found.</h1>')
            }
            res.writeHead(200, {'Content-Type': "text/html"})
            res.write(data)
            return res.end()
        })
    } else if(requestedUrl.pathname === '/contact-me.html') {
        fs.readFile('./contact-me.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('<h1>Error 404</h1><p>Page not found.</h1>')
            }
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end('<h1>Error 404</h1><p>Page not found.</h1><a href="/">Back home</a>')
    }
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})