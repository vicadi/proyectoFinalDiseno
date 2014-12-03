module.exports.generar = function(json,done) {
  var fs = require('fs');
  fs.writeFile('./plantillas/planti1/views/index.jade', 'Hola Mundo',function(err) {
 // fs.appendFile('./plantillas/planti1/views/index.jade', 'Hola Mundo',function(err) {
    if( err ){
        console.log( err );
    }
    else{
        console.log('Se ha escrito correctamente');
    }
});
  fs.readFile('./plantillas/planti1/views/index.jade', 'utf8', function(err, data) {
    if( err ){
        console.log(err)
    }
    else{
        console.log(data);
    }
});  return done("todo bien");
}