module.exports = () => {
  this.listAll = (connection, callback) => {
    connection.query('SELECT * FROM notices', callback);
  }

  this.find = (connection, callback) => {
    connection.query('SELECT * FROM notices WHERE id = 2', callback);
  }

  return this;
}