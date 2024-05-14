module.exports = (app) => {
  app.get('/news', (req, res) => {
    const connection = app.config.database();
    
    connection.query('SELECT * FROM news', (error, results) => {
      if(error) {
        throw error;
      }

      res.render('news/list', { news: results });
    });
  });
}