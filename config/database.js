const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    database: 'db_node_udemy',
    user: 'root',
    password: ''
  });
}