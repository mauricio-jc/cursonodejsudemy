module.exports = (app) => {
  app.get('/notice', (req, res) => {
    const connection = app.config.database();
    const noticesModel = app.app.models.notice_model;
    
    noticesModel.find(connection, (error, result) => {
      if(error) throw error;
      res.render('notices/view', { notice: result });
    });
  });
}