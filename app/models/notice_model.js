module.exports = () => {
  this.listAll = (connection, callback) => {
    connection.query('SELECT * FROM notices', callback);
  }

  this.find = (connection, callback) => {
    connection.query('SELECT * FROM notices WHERE id = 2', callback);
  }

  this.create = (data, connection, callback) => {
    connection.query('INSERT INTO notices SET ?', data, callback);
  }

  return this;
}