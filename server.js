var express = require('express');
var exphbs = require('express-handlebars');
require('body-parser');

var app = express();

var PORT = process.env.PORT || 8080;





  


app.listen(PORT,function(){
    console.log(`Server listening on: http://localhost:${PORT}`)
})

 