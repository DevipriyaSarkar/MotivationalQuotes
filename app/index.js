var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send("Meow!");
});

app.get('/hello', function(request, response){
  response.send("Hello World!");
});

module.exports = app;
