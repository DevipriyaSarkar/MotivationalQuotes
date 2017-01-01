var port = '8080';
var host = '0.0.0.0';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.enable('view cache');
app.engine('html', require('hogan-express'))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./app/app.js'));

app.listen(port, host);
console.log("Server is listening...");
