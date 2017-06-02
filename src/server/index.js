var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  return next();
});

app.use('/hello', function(req, res, next) {
  res.send('Hello!');
  return next();
});

mongoose.connect('mongodb://admin:qweasd123@ds159237.mlab.com:59237/prezentor-test');

mongoose.connection.once('open', function() {
  var routes;
  app.models = require('./models/index');
  routes = require('./routes');
  _.each(routes, function(controller, route) {
    return app.use(route, controller(app, route));
  });
  console.log('congratulations! DB is connected!');
  return app.listen(3000);
});
