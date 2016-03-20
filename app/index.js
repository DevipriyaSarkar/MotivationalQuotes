var express = require('express');
var app = express();

var motivations = require('motivations');

app.get('/', function(request, response){
  response.send("Meow!");
});

app.get('/hello', function(request, response){
  response.send("Hello World!");
});

app.get('/mot', function(request, response){
  response.send(motivations[3]);
});

module.exports = app;
