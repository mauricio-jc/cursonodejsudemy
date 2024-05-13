module.exports = (app) => {
  app.get('/add/new', (req, res) => {
    res.render('admin/add_new');
  });
}