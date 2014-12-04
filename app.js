var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var flash    = require('connect-flash');
//models
var models = require('./models');

var app = express();

var routes = require('./routes/index');
var clientes = require('./routes/clientes');
var plantillas = require('./routes/plantillas');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'public')));

//Sesiones y cokies
 app.use(cookieParser());
 app.use(session({secret: '1234567'}));
  app.use(flash());
  //passport
 require('./config/passport')(passport); // pass passport for configuration
 app.use(passport.initialize());
 app.use(passport.session()); // persistent login sessions

app.use('/', routes);
app.use('/clientes', clientes);
app.use('/plantillas', plantillas);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
