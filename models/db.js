'user strict';

var mysql = require('mysql');
const dbConfig = require("../config/db.config.js");

//local mysql db connection
var connection = mysql.createConnection({
    host     : dbConfig.HOST,
    user     : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;