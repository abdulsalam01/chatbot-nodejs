'use strict'

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chatbot'
});

connection.connect(function(error){
	if(error) console.log(error);
	
    console.log('Connected..!');
});

module.exports = connection;