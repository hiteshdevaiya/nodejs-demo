var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('');

var port = process.env.port || 3000;

app.get('/', function(req,res){
	res.send("hello world");
});

app.listen(port);