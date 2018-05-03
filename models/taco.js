const orm = require('../config/orm');

 
module.exports = {
    all:()=>orm.selectAll("tacos"),
    updateOne:(id)=>orm.updateOne(id)
};
