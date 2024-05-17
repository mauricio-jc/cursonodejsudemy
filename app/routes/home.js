module.exports = (app) => {
  app.get('/', (req, res) => {
    app.app.controllers.home_controller.home(app, req, res);
  });
}