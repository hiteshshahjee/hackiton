var fileStreamRotator = require('file-stream-rotator'); 
var express = require('express');
var fs = require('fs');
var morgan = require('morgan');

var app = express();
var logDir = __dirname + '/log';
//ensure log directory exists
fs.existsSync(logDir) || fs.mkdirSync(logDir);

//create a rotating write stream
var accessLogStream = fileStreamRotator.getStream({
	filename: logDir + '/access-%DATE%.log',
	frequency: 'daily',
	verbose:false
});

//setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

app.get('/', function(req, res){
	res.send('HTTP Request logging sample using files!!!');
});

app.listen(3000, function(){
	console.log('Express server listening on port: ' + 3000);
});




