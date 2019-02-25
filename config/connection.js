// setup the code to connect Node to MySQL
var mysql = require ("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "",
    database: "burgers_db"
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
// Export the connection
module.exports = connection;