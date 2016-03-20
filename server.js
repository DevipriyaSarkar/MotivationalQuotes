var port = '8080';
var host = '0.0.0.0';

var express = require('express');
var app = express();

app.use(require('./app/index.js'));

app.listen(port, host);
console.log("Server is listening...");
