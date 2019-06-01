var connection = require("../config/connection.js");

// helper function to print mySQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT *" + table + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(table, cols, vals,cb) {
      var queryString = "INSERT INTO" + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
      console.log(queryString);
      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
   updateOne: function(table, keyValue, condition, cb ) {
      var queryString = "UPDATE" + table;

          queryString += "SET";
          queryString += objToSql(keyValue);
          queryString += "WHERE";
          queryString += condition;
      console.log(queryString);
      connection.query(queryString,function(err, result) {
          if (err) throw err;
          cb(result);
        }
      );
    }
  };
module.exports = orm;