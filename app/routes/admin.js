const { validationResult } = require('express-validator');
const noticeAddRequestValidator = require('../requests_validators/notice_add_request_validator');

module.exports = (app) => {
  app.get('/notice/add', (req, res) => {
    res.render('admin/add_notice', { 
      errors: req.session.errors,
      body: req.session.body,
    });
  });

  app.post(
    '/notice/save',
    noticeAddRequestValidator,
    (req, res) => {
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
  });
}