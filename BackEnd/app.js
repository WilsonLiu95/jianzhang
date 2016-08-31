var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var checkAuth = require('./helper/checkAuth');
var app = express();

var config = require(__dirname + '/bin/config/config');

app.config = config;
app.enable('trust proxy');
// view engine by swig

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
// 鉴权

var sessionStore = new MySQLStore(config.sess);

app.use(session({
  key: 'sid',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: true,
  saveUninitialized: true,
  cookie: { path: '/', httpOnly: true, secure: false, maxAge: 3600000 }
}));

app.use(checkAuth.checkAuth);
app.use(function (req, res, next) {
  var sess = req.session;
  var userInfo;
  if (sess) {
    userInfo = {
      "userName": sess.userName,
      "uid": sess.uid
    };
  }

  var vm = {
    baseURL: app.config.baseURL,
    baseTitle: app.config.baseTitle,
    root: app.config.root,
    staticRoot: app.config.staticRoot,
    userInfo: userInfo
  };

  req.viewModel = vm;
  next();
});
// 路由
var routes = require('./routes');
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.send(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.send("error");
});


module.exports = app;
