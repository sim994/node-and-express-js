const express = require("express")
let app = express()

let port = 3030

app.listen(port,()=>{
    console.log("hello expess sever are runing");
    
})

 

app.get("/",(req,res)=>{
    res.send("This is a first page")
})

app.get("/search",(req,res)=>{
    res.send("This is a search page")
})

app.get("/about",(req,res)=>{
    res.send("This is a about page")
})

app.get("/home",(req,res)=>{
    res.send("This is a home page")
})

// app.get("*",(req,res)=>{
//     res.send("This page is not found")
// }) 