var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.ban = true;
  res.render("index");
});
router.get("/checked", function (req, res, next) {
  if (req.session.ban == true) {
    res.send("your are banned")
  }
});
router.get("/unchecked", function (req, res, next) {
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("ban removed")
    
  })
});

module.exports = router;
