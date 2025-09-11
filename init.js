const mongoose = require("mongoose");
const chat = require("./chat.js");

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

chat.insertMany([
  {
    from: "piyush",
    to: "janki",
    msg: "hello beatiful lady..",
    created_at: new Date(),
  },
  {
    from: "janki",
    to: "piyush",
    msg: "Who are you ?",
    created_at: new Date(),
  },
  {
    from: "piyush",
    to: "janki",
    msg: "you dont know me?",
    created_at: new Date(),
  },
  {
    from: "janki",
    to: "piyush",
    msg: "no i dont know who are you ?",
    created_at: new Date(),
  }
]);

