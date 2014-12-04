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
      message: req.flash('message')
   });
  });
  app.route('/vistaprevia')
  .get(function(req, res) {
   res.render('vistaPrevia');
  });
    app.route('/vistaprevia2')
  .get(function(req, res) {
   res.render('vistaPrevia2');
  });
    app.route('/vistaprevia3')
  .get(function(req, res) {
   res.render('vistaPrevia3');
  });
  app.route('/reqPortafolio')
  .post(function(req, res) {
    console.log(req.body);
    generador.generar(req.user, req.body, function(status){
      console.log(status);
    });
    res.redirect("/plantillas/requerimientos");
  });

   app.route('/prueba')
  .get(function(req, res) {
  	generador.generar({"hola":"perro"}, function(status){

  	});
  });