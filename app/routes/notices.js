module.exports = (app) => {
  app.get('/notices', (req, res) => {
    const connection = app.config.database();
    
    connection.query('SELECT * FROM notices', (error, results) => {
      if(error) {
        throw error;
      }

      res.render('notices/list', { news: results });
    });
  });
}