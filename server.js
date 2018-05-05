const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./controllers/tacos_controllers');
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use("/", express.static("public"));
app.use(routes);
app.listen(PORT, function(){console.log(`Server listening on: http://localhost:${PORT}`)
});