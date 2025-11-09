const express = require("express");
const path = require("path");
const multer = require("multer")
const crypto = require('crypto')
const app = express();
  
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;

const storage = multer.diskStorage({
  destination:function(req,file,cd) {
    cd(null,'./public/images')
  }, 
  filename:function(req,file,cd){
      crypto.randomBytes(12,function (err,bytes){
        const fn = bytes.toString("hex") + path.extname(file.originalname)
        cd(null,fn)
      })
  }
})

  const upload = multer({storage:storage})

app.listen(port, () => {
  console.log("server are started");
});
app.get("/",(req,res)=>{
    res.render('File.ejs')
})
app.post("/checkupload",upload.single('images'),(req,res)=>{
    console.log(req.file);
    
    res.send("File Upload Successfuly")
})
