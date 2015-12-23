var express = require('express');
var app = express();

var one = function(req, res, next){
	res.set('X-One', 'Hey!');
	next();
};

var two = function(req, res, next){
	res.set('X-Two', 'Oye!');
	next();
};

app.get('/', [one, two], function(req, res){
	res.send('Hello multiple callback!!!');
});

app.listen(3000, function(){
	console.log('Express server listening on port: 3000');
});