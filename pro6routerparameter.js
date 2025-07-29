const express = require("express")
let app = express()

let port = 3030

app.listen(port,()=>{
    console.log("hello expess sever are runing");
    
})

 

app.get("/",(req,res)=>{
    res.send("This is a first page")
})

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params
    res.send(`this username is a ${username} and id is${id}`)
})

