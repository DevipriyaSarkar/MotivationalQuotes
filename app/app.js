var express = require('express');
var app = express();

var motivation = require('motivation');
var pickOne = require('pick-one');

var bgImages = ["image1", "image2", "image3", "image4", "image5"];

var quoteList = motivation.getAll();

app.get('/', function(request, response){
  response.render('index', {
	  image: pickOne(bgImages),
	  quote: pickOne(quoteList).text,
	  author: pickOne(quoteList).author
  });
  
});

module.exports = app;
