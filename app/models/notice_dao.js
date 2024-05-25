class NoticeDAO {
  constructor(connection) {
    this._connection = connection;
  }
  
  listAll(callback) {
    this._connection.query('SELECT * FROM notices', callback);
  }

  findLastFiveNotices(callback) {
    this._connection.query('SELECT * FROM notices ORDER BY id DESC LIMIT 5', callback);
  }
  
  find(params, callback) {
    this._connection.query(`SELECT * FROM notices WHERE id = ${params.id}`, callback);
  }
  
  create(data, callback) {
    this._connection.query('INSERT INTO notices SET ?', data, callback);
  }
}

module.exports = () => {
  return NoticeDAO;
}