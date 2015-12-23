var express = require('express');
var app = express();

//First match route method will be fired

//Will match /user/10
app.get('/user/:id', function(req, res) {
	res.send('user id: ' + req.params.id);
});

//Will match /country/India/State/
app.get('/country/:country/state/:state?', function(req, res) {
	res.send(req.params.country + ', ' + req.params.state);
});

//Will match /abe, /abcde
app.get('/ab(cd)?e', function(req, res){
	res.send('Hello to page request for /abe, /abcde');
});

//Will match /abcd, /abxcd
app.get('/ab*cd', function(req, res){
	res.send('Hello to page request for /abcd, /abxcd');
});

//Will match /abcd, /abbcd
app.get('/ab+cd', function(req, res){
	res.send('Hello to page request for /abcd, /abbcd');
});

//Will match /abcd
app.get('/abcd', function(req, res){
	res.send('Hello to page request for /abcd');
});

//Will match /acd, /abcd
app.get('/ab?cd', function(req, res){
	res.send('Hello to page request for /abcd, /acd');
});

app.listen(3000, function(){
	console.log('Express Server listening on port: 3000');
});

