const db = require('../../config/database');

module.exports = (app) => {
  const connection = db();
  
  app.get('/news', (req, res) => {
    connection.query('SELECT * FROM news', (error, results) => {
      if(error) {
        throw error;
      }

      res.render('news/list', { news: results });
    });
  });
}