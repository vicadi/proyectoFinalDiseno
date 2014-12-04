module.exports.generar = function(user,json,done) {
  var fs = require('fs');
var exec = require('child_process').exec;
  var path='./proyectos/'+user.nickName+'/plantilla1/index.html'
  var commando="cp -r plantillas/plantilla1 proyectos/"+user.nickName;
     exec("mkdir proyectos/"+user.nickName,
         function (error, stdout, stderr) {
      exec(commando,
         function (error, stdout, stderr) {
          if(error){
           console.log(error);
          }
          else{
            console.log(stdout);
          }

  fs.readFile(path, 'utf8', function(err, data) {
    if( err ){
        console.log(err);
        return done("todo mal");
    }
    else{
        data="nuevo"+data+json;
        fs.writeFile(path, data,function(err) {
 // fs.appendFile('./plantillas/planti1/views/index.jade', 'Hola Mundo',function(err) {
           if( err ){
              console.log( err );
            }
            else{
                return done("Se ha escrito correctamente");
           }
      });
    }
 }); 
  
        });
    });
}