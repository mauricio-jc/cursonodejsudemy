module.exports = (app) => {
  app.get('/notices', (req, res) => {
    const connection = app.config.database();
    const noticesModel = app.app.models.notice_model;
    
    noticesModel.listAll(connection, (error, results) => {
      if(error) throw error;
      res.render('notices/list', { notices: results });
    });
  });
}