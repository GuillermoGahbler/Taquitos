var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;
var routes = require ("./routes");


app.engine("handlebars", exphbs({
  defaultLayout: "main"
}))

app.set("view engine", "handlebars")

app.use("/",express.static("public"))

app.use(routes)

 
app.listen(PORT,function(){
    console.log(`Server listening on: http://localhost:${PORT}`)
})


