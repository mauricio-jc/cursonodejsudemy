module.exports = (app) => {
  app.get('/add/notice', (req, res) => {
    res.render('admin/add_notice');
  });
}