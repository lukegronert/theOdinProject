const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

const page404 = fs.readFileSync('./404.html', (err, data) => {
    if(err) {
        console.log(err)
    }
    return data
})

app.get('/about', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        if(err) {
            console.log(err)
        }
        return res.end(data)
    })
})

app.get('/contact', (req, res) => {
    fs.readFile('./contact-me.html', (err, data) => {
        if(err) {
            console.log(err)
        }
        return res.end(data)
    })
})

app.get('/', (req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if(err) {
            console.log(err)
        }
        return res.end(data)
    })
})

app.use((req, res, next) => {
    res.status(404).end(page404)
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}.`)
})