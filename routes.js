const router = require('express').Router();
const exphbs = require('express-handlebars');
const tacos_controller = require('./controllers/tacos_controller')

router.get("/", (req, res, next) => {
    tacos_controller.all()
    .then(tacos=>res.render("index.handlebars",{
        tacos:tacos
    }))
        .catch(err => console.log(err))
     
    
})

























module.exports = router;