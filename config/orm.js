var connection = require ("./connection.js");

// helper function to print mySQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}
var orm = {
    selectAll: function(tableValues, cb) {
      var queryString = "SELECT *" + tableValues + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
        console.log(result);
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
      connection.query(queryString, [vals], function(err, result) {
        if (err) throw err;
        cb(result);
        console.log(result);
      });
    },
   updateOne: function(table, ) {
      var queryString =
        "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
      connection.query(
        queryString,
        [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
module.exports = orm;