var express = require('express');
var app = express();

var motivations = require('motivations');
var pickOne = require('pick-one');

var bgImages = ["image1", "image2", "image3", "image4", "image5"];

app.get('/', function(request, response){
  response.render('index', {
	  image: pickOne(bgImages),
	  quote: pickOne(motivations)
  });
  
});

module.exports = app;
