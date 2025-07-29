const express = require("express")
let app = express()

let port = 3030

app.listen(port,()=>{
    console.log("hello expess sever are runing");
    
})

 

app.get("/",(req,res)=>{
    res.send("This is a first page")
})

app.get("/:username/:age",(req,res)=>{
    let {username,age} = req.params
    let {q} = req.query
    res.send(`<h1>username :${username} <br> age :${age} <br> Query :${q}</h1>`)
})

