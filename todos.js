var express = require('express');
var app = express();
var router = express.Router();

	router.get('/', function(req, res) {
	res.render('index');
});
	router.get('/users', function(req, res) {
	res.render('users');
	
});
	router.get('/contact', function(req, res) {
	res.render('contact');
});


module.exports = router;