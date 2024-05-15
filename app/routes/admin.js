module.exports = (app) => {
  app.get('/notice/add', (req, res) => {
    res.render('admin/add_notice');
  });

  app.post('/notice/save', (req, res) => {
    res.send('Chegou aqui');
  });
}