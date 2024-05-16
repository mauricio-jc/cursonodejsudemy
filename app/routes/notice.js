module.exports = (app) => {
  app.get('/notice', (req, res) => {
    const connection = app.config.database();
    const noticeDao = new app.app.models.notice_dao(connection);
    
    noticeDao.find((error, result) => {
      if(error) throw error;
      res.render('notices/view', { notice: result });
    });
  });
}