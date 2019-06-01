var express = require("express");
var burgers = require("../models/burger");
var router = express.Router();

// Get burgers from database
router.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;

    res.render("index.handlebars", { burgers: data });
  });
});

// Post create new burgers
router.post("/api/burgers", function(req, res) {
  burgers.create(
    ["burger_name", devoured],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      if (err) throw err;
      res.json({ id: result.insertID });
    }
  );
});

//update burger
router.put("/api/burgers/:id")


module.exports = router;