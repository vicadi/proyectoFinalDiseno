var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/registrar')
  .get(function(req, res) {
   res.render('registrar', {
      title: 'requerimientos',
      pesRegistrar: 'active',
      sesion: req.user
   });
  });
