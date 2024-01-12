const fs = require('fs')

//Make a folder/Directory
fs.mkdir("tutorial",(err)=>{
    if(err){
        console.log("Error while creating directory",err)
    }else{
        fs.writeFile("./tutorial/tutorial1.txt","File within the folder",(err)=>{
            if(err){
                console.log("Error while writing to the file")
            }else{
                console.log("Successfully created file")
            }
        })
    }
})

//We cannot use rmdir directly on a directory if it contains some file(s). Firstly we have to unlink that file(s) and then delete the directory
fs.unlink("./tutorial/tutorial1.txt",(err)=>{
    if(err){
        console.log("Error while unlinking",err)
    }else{
        console.log("Successfully unlinked file")
    }
})


//Can use rmdir to delete a directory that is empty and contains no file
fs.rmdir("tutorial",(err)=>{
    if(err){
        console.log("Error while removing directory")
    }else{
        console.log("Successfully removed directory")
    }
})


//If a directory contains multiple files , firstly apply a loop to unlink all those and then rmdir
fs.readdir("Dummy",(err,files)=>{
    if(err){
        console.log("Error while reading directory ",err)
    }else{
        console.log("Successfully read directory files ",files)
        for(let file of files){
            fs.unlink('./Dummy/' + file, (err)=>{
                if(err){
                    console.log(`Error while unlinking ${file} `,err)
                }else{
                    console.log(`Successfully unlinked ${file}`)
                }
            })
        }
        fs.rmdir("Dummy",(err)=>{
            if(err){
                console.log("Error while deleting directory! ",err)
            }else{
                console.log("Successfully deleted directory!")
            }
        })
    }
})