var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '54.177.12.67',
  user     : 'root',
  password : 'test123',
  database : 'restaurants'
});

connection.connect(() => console.log('connected to the database!'));

module.exports = connection;