var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser());

// define notes

app.use(require('./todos'));

// start the server
app.listen(3000, function() {
	console.log('Listening on port 3000');
});