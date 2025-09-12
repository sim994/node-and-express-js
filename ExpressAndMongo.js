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
app.get("/chats/newcon", async (req, res) => {
      res.render("addnewcon.ejs")
});

app.post("/chats", async (req, res) => {
  try {
    let { from, to, msg } = req.body; 
    let newchat = new chat({
      from,
      to,
      msg,
      created_at: new Date(),
    });

    await newchat.save();
    console.log("✅ Chat saved successfully!");
    res.redirect("/chats");
  } catch (err) {
    console.error(" Error saving chat:", err);
    res.status(500).send("Failed to save chat");
  }
});
