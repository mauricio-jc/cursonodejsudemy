module.exports = (app) => {
  app.get('/notices', (req, res) => {
    app.app.controllers.notice_controller.notices(app, req, res);
  });

  app.get('/notice', (req, res) => {
    app.app.controllers.notice_controller.notice(app, req, res);
  });
}