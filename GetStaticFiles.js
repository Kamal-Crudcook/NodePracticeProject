const http = require("http")
const fs = require("fs")

http.createServer((req,res)=>{
    const readStream = fs.createReadStream("./Static/IMG_0094.jpg")
    res.writeHead(200,{"Content-type":'image/jpg'}) //If request is successfullly completed
    readStream.pipe(res);
}).listen(3000)

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./Static/application.json')
    res.writeHead(200,{'Content-type':'application/json'})
    readStream.pipe(res)
}).listen(4000)

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./Static/index.html')
    res.writeHead(200,{'Content-type':'index/html'})
    readStream.pipe(res)
}).listen(5000)