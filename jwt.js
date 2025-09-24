const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const app = express();
const jwt = require('jsonwebtoken')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

app.listen(3000)
app.get('/',(req,res)=>{
   let token = jwt.sign({email:"hiren123@gmail.com"},"secret")
    res.cookie("token",token)
})

app.get("/read",(req,res)=>{
    console.log(req.cookies)
})