const express = require("express");
const app = express();
const sendmail = require("./Sendmail")


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;


app.listen(port, () => {
  console.log("server are started");
});
app.get("/",sendmail)