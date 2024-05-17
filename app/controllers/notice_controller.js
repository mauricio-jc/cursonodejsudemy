module.exports.notices = (app, req, res) => {
  const connection = app.config.database();
  const noticeDao = new app.app.models.notice_dao(connection);
  
  noticeDao.listAll((error, results) => {
    if(error) throw error;
    res.render('notices/list', { notices: results });
  });
}

module.exports.notice = (app, req, res) => {
  const connection = app.config.database();
  const noticeDao = new app.app.models.notice_dao(connection);
  
  noticeDao.find((error, result) => {
    if(error) throw error;
    res.render('notices/view', { notice: result });
  });
}