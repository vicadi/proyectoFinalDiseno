var express = require('express');
var app = module.exports = express();
var exec = require('child_process').exec;

app.set('views',__dirname + '/views');

app.route('/registrar')
  .get(function(req, res) {
    var commando="cp -r plantillas/planti1 temporal";
    exec(commando,
       function (error, stdout, stderr) {
        if(error){
          console.log(error);
        }
        else{
          console.log(stdout);
        }

       });
   res.render('registrar', {
      title: 'requerimientos',
      pesRegistrar: 'active',
      usuario: req.user,
      message: req.flash('message')
   });
  });

app.route('/registrar')
  .post(function(req, res) {
    if (req.body.nickName){
        var nickName = req.body.nickName.toLowerCase(); 
    }
    process.nextTick(function() {
        db.user.findOne({ "nickName" :  nickName }, function(err, user) {
         
            if (user) {
                req.flash('message', 'That nickName is already taken.');
                console.log('ya existe');
                res.redirect("/");
            } else {
              if(err){
                req.flash('message', 'error');
                res.redirect("/");
              }

                var newUser= new db.user();
                    newUser.nickName = nickName;
                    newUser.contrasena = newUser.generateHash(req.body.contrasena);
                newUser.save(function(error, user) {
                     
                    if(user){
                      req.flash('message', 'new user created');
                      res.redirect("/");
                    }
                });
  
            }
        });
     });
  });