var express = require('express');
var app = module.exports = express();

var generador=require("../../modulos/generadorPlantillas");

app.set('views',__dirname + '/views');

app.route('/requerimientos')
  .get(function(req, res) {
   res.render('requerimientos', {
      title: 'requerimientos',
      pesRequerimiento: 'active',
      usuario: req.user,
      message: req.flash("message")
   });
  });
  app.route('/vistaPrevia')
  .get(function(req, res) {
   res.render('vistaPrevia');
  });

  app.route('/reqPortafolio')
  .post(function(req, res) {
  	generador.generar(req.body, function(status){

  	});
  });

   app.route('/prueba')
  .get(function(req, res) {
  	generador.generar({"hola":"perro"}, function(status){

  	});
  });