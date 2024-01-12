const fs = require('fs')

//Creating a read stream
const readStream = fs.createReadStream("./example.txt",'utf8',(err)=>{
    if(err){
        console.log("Error creating read stream ",err)
    }else{
        console.log("Read stream created")
    }
})

//Creating a write stream
const writeStream = fs.createWriteStream("example1.txt",(err)=>{
    if(err){
        console.log("Error creating write stream ",err)
    }else{
        console.log("Write stream created")
    }
})

//Reading data from example.txt in chunks and writing parrallely to example2.txt
// readStream.on("data",(chunk)=>{
//     writeStream.write(chunk)      
// })

//Shorter way to connect readStream with a writeStream
//Can be achieved using "pipe" method. We will need atleast two streams :- one source and one destination stream
readStream.pipe(writeStream)

//To create a transform stream
//Means recieve data and manipulate it maybe for compression
const zlib = require('zlib')
const gzip = zlib.createGzip();
const writeStream3 = fs.createWriteStream("example3.txt.gzip")
readStream.pipe(gzip).pipe(writeStream3)


//Take a zip file as a source, uncompress it and write it to the destination
const gunzip = zlib.createGunzip();
const readStream1 = fs.createReadStream("./example3.txt.gzip")
const writeStream4 = fs.createWriteStream("example5.txt")
readStream1.pipe(writeStream3)

//There is another method readFile in file system module that can be used for reading
//But readStream method is often used especially when a large file (in gigabytes) is to be read
//Because readFile method makes use of full buffer for file reading, if fileSize>bufferSize it will not be able to read
//Whereas readStream reads data in chunks and makes use of a small part of buffer repeatedly for reading . Hence it can read big files too


