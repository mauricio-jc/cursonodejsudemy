const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const session = require('express-session')

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: '15191981981',
  resave: false,
  saveUninitialized: false
}));

app.use(express.static('./app/public'));

consign()
  .include('app/routes')
  .then('config/database.js')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;