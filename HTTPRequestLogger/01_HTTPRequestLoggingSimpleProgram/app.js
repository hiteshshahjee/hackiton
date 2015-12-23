var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('combined'));

app.get('/', function(req, res){
	res.send('Hello HTTP Logger!!!');
})


app.listen(3000, function(){
	console.log('Express server listening at localhost on port: ' + 3000);
});