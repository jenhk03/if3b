console.log("Belajar Node JS")
const hello = require('./hello')
hello.mhs()
hello.dosen()
const url = require('url')
const fs = require('fs')
const path = require('path')
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write
    }
    else if (req.url)
})
server.listen(5001, () => {
    console.log('Server is running')
})