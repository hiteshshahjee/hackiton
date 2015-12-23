var express = require('express');
var app = express();

app.get('/', 
	function(req, res, next){
		res.set('X-One', 'Hey!');
		next();
	},
	function(req, res, next){
		res.set('X-Two', 'Ho!');
		next();
	},
	function(req, res){
		res.send('Hello multiple callback!!!');
	}
);

app.listen(3000, function(){
	console.log('Express server listening on port: 3000');
});
