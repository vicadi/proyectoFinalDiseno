var express = require('express');
var app = module.exports = express();
var generador=require("../modulos/generadorPlantillas");

app.set('views',__dirname + '/views');

app.route('/requerimientos')
  .get(function(req, res) {
   res.render('requerimientos', {
      title: 'requerimientos',
      pesRequerimiento: 'active',
      sesion: req.user
   });
  });
  app.route('/regPortafolio')
  .post(function(req, res) {
  });