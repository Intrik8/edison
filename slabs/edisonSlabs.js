module.exports = function(app) {
  var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    routes = [];

  router.all('app/*', function(req, res, next) {

    // Should check if user has valid authentication.

    next();
  });

  // Read dir to get all files into it.
  // In this case you can read sync because this
  // script just runs once ( when nodejs starts ).
  slabsInstalled = fs.readdirSync('./slabs', function(err) {
    if (err) throw err;
  }).filter(function(file) {
    return fs.statSync(path.join('./slabs', file)).isDirectory();
  });


  console.log(slabsInstalled);
  // Travel all private routes files.
  //routes.forEach(function(routeFile) {
  // Require and execute route module.
  //require('./slabs/' + routeFile)(app);
  //});

  app.use('/api', router);
};
