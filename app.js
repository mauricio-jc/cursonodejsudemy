var http = require('http');

var server = http.createServer((req, res) => {
  var url = req.url;

  if(url == '/tecnologia') {
    res.end("<html><body><h1>Noticias de tecnologia</h1></body></html>");
  }
  else if (url == '/moda') {
    res.end("<html><body><h1>Noticias de moda</h1></body></html>");
  }
  else if (url == '/beleza') {
    res.end("<html><body><h1>Noticias de beleza</h1></body></html>");
  }
  else {
    res.end("<html><body><h1>Portal de noticias</h1></body></html>");
  }

  
});

server.listen(3000);