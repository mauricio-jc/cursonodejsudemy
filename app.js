const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home/index');
});

app.get('/add/new', (req, res) => {
  res.render('admin/add_new');
});

app.get('/news', (req, res) => {
  res.render('news/list');
});

app.listen(3000, () => {
  console.log('Server Up');
});