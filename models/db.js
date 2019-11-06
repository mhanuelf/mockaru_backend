'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '35.188.28.195',
    user     : 'mockaru',
    password : 'kh27mr19fz',
    database : 'mockaru'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;