const mysql = require('mysql');

const connectionDb = () => {
  return mysql.createConnection({
    host: 'localhost',
    database: 'db_node_udemy',
    user: 'root',
    password: ''
  });
}

module.exports = () => {
  return connectionDb;
}