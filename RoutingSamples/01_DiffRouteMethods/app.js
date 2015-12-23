var express = require('express');
var app = express();

app.all('/', function(req, res, next){	
	res.set('X-Catch-All', 'true');
	next();	
});

app.get('/', function(req, res){
	res.send('/ GET Hello World!!');
});

app.post('/', function(req, res){
	res.send('/ POST Hello World!!');
});

app.put('/', function(req, res){
	res.send('/ PUT Hello World!!');
});

app.patch('/', function(req, res){
	res.send('/ PATCH Hello World!!');
});

app.delete('/', function(req, res){
	res.send('/ DELETE Hello World!!');
});

app.options('/', function(req, res){
	res.send('/ OPTIONS Hello World!!');
});

app['m-search']('/', function(req, res){
	res.send('/ M-SEARCH Hello World!!');
});

app.notify('/', function(req, res){
	res.send('/ NOTIFY Hello World!!');
});

app.subscribe('/', function(req, res){
	res.send('/ SUBSCRIBE Hello World!!');
});

app.unsubscribe('/', function(req, res){
	res.send('/ UNSUBSCRIBE Hellow World!!');
});

app.listen(3000, function(){
	console.log('Express server listening on port: 3000');
});