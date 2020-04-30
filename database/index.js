var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test123',
  database : 'restaurants'
});

connection.connect(() => console.log('connected to the database!'));

module.exports = connection;