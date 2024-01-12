const fs = require('fs');

//Create a file, write to it and read it if successfully created!
fs.writeFile("example.txt","This is an example",(err)=>{
    if(err){
        console.log("Erorr while file creation")
    }else{
        console.log("File successfully created")
        fs.readFile("example.txt","utf8",(err,file)=>{
            if(err){
                console.log("Erorr while reading file")
            }else{
                console.log("File contentss ",file)
            }
        })
    }
})

//Rename a file
fs.rename("example.txt","dummyExample.txt",(err)=>{
    if(err){
        console.log("Erorr while renaming")
    }else{
        console.log("File successfully renamed")
    }
})

//Append data to the file
fs.appendFile("example.txt","Some data being appened",(err)=>{
    if(err){
        console.log("Erorr while appending data to the file")
    }else{
        console.log("Data appended successfully")
    }
})


//Deleting a file
fs.unlink("example.txt",(err)=>{
    if(err){
        console.log("Error while unlinking")
    }else{
        console.log("File deleted successfully")
    }
})

