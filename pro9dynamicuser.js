const express = require("express")
const app = express()

let port = 1010
app.set("view engine","ejs")
app.listen(port,()=>{
    console.log("server run");
    
})

// app.get('/:username',(req,res)=>{
//     let {username} = req.params
//     res.render("user",{username})
// })

app.get("/random",(req,res)=>{
        let no = Math.floor(Math.random() * 6)
        
        let tn =[]
        
        tn+=no
        res.render("condition",{num:no,tn:tn})
})