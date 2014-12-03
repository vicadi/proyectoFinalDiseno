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

app.route('/registrar')
  .post(function(req, res) {
      if (req.body.nickName){
        var nickName = req.body.nickName.toLowerCase(); 
    }
    process.nextTick(function() {
        db.user.findOne({ "nickName" :  nickName }, function(err, user) {
            if (err)
                return done(err);
            if (user) {
                return done(new Error("User not created"), false, req.flash('message', 'That nickName is already taken.'));
            } else {

                var newUser= new db.user();
                    newUser.nickName = nickName;
                    newUser.contrasena = newUser.generateHash(req.body.contrasena);
                newUser.save(function(error, user) {
                    if (error)
                        return done(error);          
                    if(req.user){
                        if(req.user.nickName=="admin"){
                            return done(null, false, req.flash('message', 'new user created  by admin'));
                        }
                    }
                    if(user){
                        return done(null, user, req.flash('message', 'new user created'));   
                    }
                });
  
            }
        });
     });
  });