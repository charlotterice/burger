var express = require("express");
var burgers = require("../models.burger.js");
var router = express.Router();

// Get burgers from database
router.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) throw err;
  
      // Test it
      // console.log('The solution is: ', data);
  
      // Test it
      // return res.send(data);
  
      res.render("index", { burgers: data });
    });
  });
  
  // Post create new burgers
  router.post("/", function(req, res) {
    // Test it
    // console.log('You sent, ' + req.body.task);
  
    // Test it
    // return res.send('You sent, ' + req.body.task);
  
    connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(err, result) {
      if (err) throw err;
  
      res.redirect("/");
    });
  });