const { validationResult } = require('express-validator');

module.exports.notice_add = (app, req, res) => {
    res.render('admin/add_notice', { 
      errors: req.session.errors,
      body: req.session.body,
    });
}

module.exports.notice_save = (app, req, res) => {
  const validate = validationResult(req);
  const data = req.body;

  if(!validate.isEmpty()) {
    req.session.errors = validate.array();
    req.session.body = data;
    res.redirect('/notice/add');
    return;
  }    

  const connection = app.config.database();
  const noticeDao = new app.app.models.notice_dao(connection);

  noticeDao.create(data, (error, results) => {
    if(error) throw error;
    res.redirect('/notices');
  });
}