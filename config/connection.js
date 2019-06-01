var mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
//   var connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Westpoint19!",
    database: "burgers_db"
  });
// };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
//export connection properties so we can use them in other files.
module.exports = connection;
