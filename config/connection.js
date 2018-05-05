const mysql = require('mysql');
const PORT = process.env.PORT || 3000;
const connection = mysql.createConnection({
	 
    host: "localhost",
    user: "root",
    password: "root",
		database: "tacos_db",
		// port: "3306"
		 
	});
 
connection.connect(function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(connection.threadId);
});

 
module.exports = connection;


















  