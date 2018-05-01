var mysql = require('mysql');

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tacos_db"
});





connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
 


app.listen(PORT,function(){
    console.log("Server listening on: http://" + PORT)
})


module.exports = connection;