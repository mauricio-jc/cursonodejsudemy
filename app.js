const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("<html><body><h1>Portal de noticias</h1></body></html>")
});

app.get('/tecnologia', (req, res) => {
  res.send("<html><body><h1>Noticias de tecnologia</h1></body></html>");
});

app.get('/moda', (req, res) => {
  res.send("<html><body><h1>Noticias de moda</h1></body></html>");
});

app.get('/beleza', (req, res) => {
  res.send("<html><body><h1>Noticias de beleza</h1></body></html>");
});

app.listen(3000, () => {
  console.log('Server Up');
});