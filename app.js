/**
 *
 * Edison Application Server
 *
 * V0.0.1 - schereja - Setting up initial server
 *
 */
//Used for performance testing
require('dotenv').load();

var beginning = (new Date()).getTime()
  /* Modules Setup */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var fs = require('fs');
var http = require('http');
var logger = require('morgan');
var app = express();
var router = express.Router();
var pub = __dirname;
/* Setting Up things to use with express */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(pub + '/public')));
app.use(favicon(path.join(pub, 'public', 'img', 'favicon.ico')));
/* Configure server*/
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(pub, 'public'));
app.set('view engine', 'jade');
app.set('env', process.env.NODE_ENV || "developement")
app.use(function(req, res, next) {
  console.log("Method: " + req.method + " URL: " + req.url);
  next();
});
process.env.EDISON_SETUP_COMPLETED++;
if (process.env.EDISON_SETUP_COMPLETED == 1) {
  console.log("test");
}
require('./controllers/edisonCore.js')(app);
//require('./slabs/edisonSlabs.js')(app);
app.use("/api", router);

app.listen(3000);
