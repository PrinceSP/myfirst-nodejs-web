var express = require('express');
var config = require('./config');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    cookie: { maxAge: 1000*60*30 } ,
    secret: "session secret" ,
    resave: false,
    saveUninitialized: true,
    store:new MongoStore({
            db: config.mongo_db,
            url: 'mongodb://'+config.database.mongodb.host+':'+config.database.mongodb.port+'/'+config.database.mongodb.database,
            host: config.database.mongodb.host,
            port: config.database.mongodb.port,
//                username: 'cm',
//                password: 'cm',
//                collection: 'session',
            auto_reconnect:true
    })
}));

require('./bootstrap');

app.use('/',require('./routes/index'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
