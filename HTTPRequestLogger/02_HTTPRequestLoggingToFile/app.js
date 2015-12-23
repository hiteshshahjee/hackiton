var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var app = express();


var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

app.get('/', function(req, res){
	res.send('HTTP Request logging sample using files!!!');
});

app.listen(3000, function(){
	console.log('Express server listening on port: ' + 3000);
});




