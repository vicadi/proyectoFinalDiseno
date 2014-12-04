var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/registrar')
  .get(function(req, res) {
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