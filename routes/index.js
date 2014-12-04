var express = require('express');
var app = module.exports = express();
var passport = require('passport');

app.route('/')
   .get(function(req, res){
   	res.render('home', {
   		title: 'home',
   		pesHome: 'active',
      usuario: req.user,
      message: req.flash('message')
   	});
   });
app.route('/login')

  .post(passport.authenticate('local-login', {
      successRedirect : '/', 
      failureRedirect : '/clientes/registrar', 
      failureFlash : true 
    }));

app.route('/logout')

  .get(function(req, res) {
    req.logout();
    res.redirect('/');
  });
 
