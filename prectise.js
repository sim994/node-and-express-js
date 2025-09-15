const express = require("express");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3030;

app.listen(port, () => {
  console.log("server are started");
});
let fd = [
  {
    id: uuidv4(),
    fullname: "hiren",
    age: 21,
  },
  {
    id: uuidv4(),
    fullname: "vaibhav",
    age: 17,
  },
  {
    id: uuidv4(),
    fullname: "piyush",
    age: 18,
  },
];

app.get("/form", (req, res) => {
  res.render("nf.ejs");
});

app.post("/form/:id",(req,res)=>{
  let {id,fullname,age} = req.body
  
  fd.find((d) => id === d.id)
  fd.push({id,fullname,age})
  
  res.render("show.ejs",{data:fd})
 

})

app.get("/form/showdata",(req,res)=>{
  res.render("show.ejs")
})


