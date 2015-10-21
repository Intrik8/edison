module.exports = function(app) {
  var express = require("express"),
    router = express.Router(),
    controller = require('./core/coreController')();

  // Possible public routes.
  router.get('/', controller.genericResponse);
  router.get('/home', controller.genericResponse);
  router.get('/login', controller.genericResponse);
  router.get('/contacts', controller.genericResponse);
  router.get('/clients', controller.genericResponse);


  // Add router to middleware
  app.use('/', router);
}
