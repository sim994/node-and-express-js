const express = require("express")
const app = express()

let port = 5050

app.set("view engine","ejs")

app.listen(port,()=>{
    console.log("your server run properly");
    
})

app.get("/",(req,res)=>{
        res.render("home")
})
app.get("/random",(req,res)=>{
        let no = Math.floor(Math.random() * 6)
        res.render("random",{num:no})
})