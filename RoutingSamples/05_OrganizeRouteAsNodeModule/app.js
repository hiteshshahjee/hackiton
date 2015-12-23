var express = require('express');
var app = express();

var routes = require('./routes');
var user = require('./routes/users');

app.get('/', routes.index);
app.get('/user', user.list);

app.listen(3000, function(){
	console.log('Express server listening on port: 3000');
});