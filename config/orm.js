const connection = require('../config/connection')


const queryDB = (statement) => {
    return new Promise((resolve, reject) => {
        connection.query(statement, (err, results) => {
            err ? reject(err) : resolve(results)
        })
    })
}


module.exports = {

    selectAll: (tableName) => {
        const statement = `select * FROM ${tableName}`;
        return queryDB(statement)
            .then(results => results)
            .catch(err => console.log(err))

    },



    insertOne: () => "",
    updateOne: (id) => {
        const statement = `select * FROM ${tableName}`;
        return queryDB(statement)
            .then(results => results)
            .catch(err => console.log(err))

    }

}