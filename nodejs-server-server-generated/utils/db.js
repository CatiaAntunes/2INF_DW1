`use strict`;

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "schedules"
});

connection.connect (function (err) {
    if (err){
        console.log('Error on database connection.');
        throw err;
    }

    console.log('Database connection active.')
});

module.exports = connection;
