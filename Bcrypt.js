const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require('bcrypt')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

app.listen(3000)
app.get('/',(req,res)=>{
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash("hyper",salt,function(err,hash){
            console.log(hash); 
        })
    })

    bcrypt.compare("hyper","$2b$10$r3GOUNRYstfwRRZwe/VXOOh6tOwxrHr0OdtxZc2fLK/N603EVwvyy",function(err,result){
            if (result) {
                console.log("password are correct");
            }
            console.log(err);
            
    })
    res.send("Done")
})

