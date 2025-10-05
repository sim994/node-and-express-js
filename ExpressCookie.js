var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.cookie("age", 25);
  res.render("index");
});
router.get("/ch", function (req, res, next) {
    console.log(req.cookies.age);
    res.send("your cookie has been set")
    
});

module.exports = router;
