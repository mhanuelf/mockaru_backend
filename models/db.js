'user strict';

var mysql = require('mysql');
const dbConfig = require("../config/db.config.js");

//local mysql db connection
var connection = mysql.createPool({
    connectionLimit: 10,
    host     : dbConfig.HOST,
    user     : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB
});

connection.getConnection((err, connectionpool) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connectionpool) connectionpool.release()
    return
})

module.exports = connection;