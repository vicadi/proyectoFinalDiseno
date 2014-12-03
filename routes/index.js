var express = require('express');
var app = module.exports = express();

app.route('/')
   .get(function(req, res){
   	res.render('home', {
   		title: 'home'
   	});
   });