// setup the code to connect Node to MySQL
var mysql = require ("mysql");
var connection;
if (process.env.JAWSDB_URL){
connection = mysql.createConnection(process.env.JAWSDB_URL);}
else{
  connection = mysql.createConnection({
  host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"  
  });
};
 app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
// Export the connection
module.exports = connection;