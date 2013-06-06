var express = require('express');
var app = express();

app.get('/', function(req, res){
  var body = req.originalUrl;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.get('/robots.txt', function(req, res){
  var body = req.originalUrl;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(8087);
console.log('Listening on port 8087');

