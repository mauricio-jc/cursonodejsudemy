const noticeAddRequestValidator = require('../requests_validators/notice_add_request_validator');

module.exports = (app) => {
  app.get('/notice_add', (req, res) => {
    app.app.controllers.admin_controller.notice_add(app, req, res);
  });

  app.post('/notice_save', noticeAddRequestValidator, (req, res) => {
    app.app.controllers.admin_controller.notice_save(app, req, res);
  });
}