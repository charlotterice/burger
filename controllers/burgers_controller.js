var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


router.get('/', function(req, res) {
  res.redirect('/burgers');
});

// Get burgers from database
router.get("/burgers", function(req, res) {
  burger.selectAll(function(burger_data){
    res.render("index.handlebars", { burger_data });
  });
});

// Post create new burgers
router.post("/burgers/create", function(req, res) {
  if (req.body.burger_name == '') {
      console.log('No burger name entered');
      res.redirect('/');
  } else {
      //takes the request object using it as input for buger.addBurger
      burger.insertOne(req.body.burger_name, function(result) {
          //wrapper for orm.js that using MySQL insert callback will return a log to console, render back to index with handle
          console.log(result);
          res.redirect('/');
      });
  }
});

//put route -> back to index
router.put('/burgers/update', function(req, res) {
  burger.updateOne(req.body.burger_id, function(result) {
      //wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
      console.log(result);
      res.redirect('/');
  });
});
module.exports = router;
