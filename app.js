/**
 *
 * Edison Application Server
 *
 *  V0.0.1 - schereja - Setting up initial server
 *
 */

// Required Modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');


var app = express();

var router = express.Router();
var pub = __dirname;
// Middleware

/**
  Setting body parser to work with json
 */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(router);

app.use(favicon(path.join(pub, 'public', 'img', 'favicon.ico')));
/*
  Setting default views path
 */
app.set('views', path.join(pub, 'public'));

/*
  Setting default template engine to jade
 */
app.set('view engine', 'jade');

app.use(function(req, res, next) {
  console.log('Time:', Date.now());

  next();
});

router.get("/", function(req, res) {
  res.json({
    "message": "Hello World"
  });
});

app.use("/api", router);


app.listen(3000, function() {
  console.log("Port 3000");
});
