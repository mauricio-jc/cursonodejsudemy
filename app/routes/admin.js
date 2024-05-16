module.exports = (app) => {
  app.get('/notice/add', (req, res) => {
    res.render('admin/add_notice');
  });

  app.post('/notice/save', (req, res) => {
    var data = req.body;
    const connection = app.config.database();
    const noticeDao = new app.app.models.notice_dao(connection);
    
    noticeDao.create(data, (error, results) => {
      if(error) throw error;
      res.redirect('/notices');
    });
  });
}