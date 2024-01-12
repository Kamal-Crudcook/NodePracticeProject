const express = require('express')
const expObject = express()
const path = require("path")
expObject.use("/public",express.static(path.join(__dirname,"static")))  //Giving an alias to directory named "static"

expObject.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"static","index.html"))
})

expObject.get("/example",(req,res)=>{
    res.send("Hitting example route")
})

expObject.get('/example/:name/:age',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.name + ":" + req.params.age)
})

expObject.listen(3000)