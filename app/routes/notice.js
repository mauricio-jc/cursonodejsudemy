module.exports = (app) => {
  app.get('/notice', (req, res) => {
    const connection = app.config.database();
    
    connection.query('SELECT * FROM notices WHERE id = 2', (error, result) => {
      if(error) {
        throw error;
      }

      res.render('notices/view', { result: result });
    });
  });
}