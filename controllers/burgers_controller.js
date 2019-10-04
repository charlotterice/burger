var express = require("express");
// var burger = require("../models/burger.js");
var router = express.Router();
var db = require("../models/");

router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/api");
});


// Get burgers from database
router.get("/api", function(req, res) {

db.Burger.findAll().then(function(dbBurger){
  console.log(dbBurger);
  var hbsObject = {burger:dbBurger};
  return res.render("index", hbsObject);
});
});


// Post create new burgers
router.post("/api/create", function(req, res) {
  console.log(req.body);
  db.Burger.create({ burger_name:req.body.burger_name})
  .then(function(dbBurger){
    console.log(dbBurger);
    res.redirect("/");
  });
});

//put route -> back to index
router.put("/api/update/:id", function(req, res) {
  db.Burger.update({
    devoured:true
  },{
    where:{
      id:req.params.id
    }
    }).then(function(dbBurger){
      res.json("/");
  });
});


module.exports = router;
