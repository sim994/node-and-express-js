const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const chat = require("./chat.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main()
  .then((res) => {
    console.log("connection succefuly");
  })
  .catch((err) => {
    console.log("something went wong");
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Mechat");
}

const port = 3000;

app.listen(port, () => {
  console.log("server are started");
});
app.get("/chats", async (req, res) => {
  let data = await chat.find();
  res.render("mechats.ejs", { data });
});
app.post("/chats/addnewcon", (req, res) => {
  res.render("addnewcon.ejs");  
  let { from, to, msg } = req.body;
  let newchat = new chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });

  res.send("this page is worikig")
  newchat
    .save()
    .then(res => {
      console.log("data are saving");
    })
    .catch(err => {
        console.log("data are not saves in database");
    });

    res.redirect("/chats");
});
