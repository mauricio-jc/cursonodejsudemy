const mysql = require('mysql');

module.exports = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    database: 'node_db_udemy',
    user: 'root',
    password: ''
  });

  return connection.connect();
}