const { log } = require('console');
const express = require('express')
const path = require("path")
const app = express();

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("views",path.join(__dirname,"/views"));

const port = 3030

app.listen(port,()=>{
    console.log("server are started");
})

app.get("/info",(req,res)=>{
    let {user,age} = req.params
    res.send(`user name is ${user} and your age is ${age}`)

    console.log(req.body);
})

app.post("/info",(req,res)=>{
    let {user,age} = req.body
    res.send(`user name is ${user} and your age is ${age}`)

    console.log(req.body);
})