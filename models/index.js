 // models/index.js
if (!global.hasOwnProperty('db')) {
 
  var mongoose = require('mongoose');
 
  var dbName = 'diseno'
 
  // the application is executed on the local machine ...
  mongoose.connect('mongodb://localhost/' + dbName);
 
 
  global.db = {
 
    mongoose: mongoose,
 
    //models
    user:require('./user')(mongoose)
    
    // agregar más modelos aquí en caso de haberlos
  };
}
 
module.exports = global.db;