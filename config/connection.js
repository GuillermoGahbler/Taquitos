var mysql = require('mysql');
 
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tacos_db"

});





  


 
module.exports = connection;