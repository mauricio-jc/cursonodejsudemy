module.exports = (app) => {
  app.get('/notices', (req, res) => {
    const connection = app.config.database();
    const noticeDao = new app.app.models.notice_dao(connection);
    
    noticeDao.listAll((error, results) => {
      if(error) throw error;
      res.render('notices/list', { notices: results });
    });
  });
}