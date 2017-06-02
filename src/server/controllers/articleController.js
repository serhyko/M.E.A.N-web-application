var restful;

restful = require('node-restful');

module.exports = function(app, route) {
  var rest;
  rest = restful.model('article', app.models.article).methods(['get', 'put', 'post', 'delete']);
  rest.register(app, route);
  return function(req, res, next) {
    return next();
  };
};
