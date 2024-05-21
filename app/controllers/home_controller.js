module.exports.home = (app, req, res) => {
  const connection = app.config.database();
  const noticeDao = new app.app.models.notice_dao(connection);

  noticeDao.findLastFiveNotices((error, results) => {
    if(error) throw error;
    res.render('home/index', { notices: results });
  });
}