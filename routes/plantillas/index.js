var express = require('express');
var app = module.exports = express();
<<<<<<< HEAD
=======
var generador=require("../../modulos/generadorPlantillas");
>>>>>>> 7192f807e917fdca7d9de7f62217df0194ce4a96

app.set('views',__dirname + '/views');

app.route('/requerimientos')
  .get(function(req, res) {
   res.render('requerimientos', {
      title: 'requerimientos',
      pesRequerimiento: 'active',
      sesion: req.user
   });
  });
  app.route('/reqPortafolio')
  .post(function(req, res) {
  	generador.generar(req, function(status){

  	});
  });