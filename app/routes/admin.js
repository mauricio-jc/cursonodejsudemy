module.exports = (app) => {
  app.get('/notice/add', (req, res) => {
    res.render('admin/add_notice');
  });

  app.post('/notice/save', (req, res) => {
    var data = req.body;
    const connection = app.config.database();
    const noticesModel = app.app.models.notice_model;
    
    noticesModel.create(data, connection, (error, results) => {
      if(error) throw error;
      res.redirect('/notices');
    });
  });
}