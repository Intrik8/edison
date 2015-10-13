/**
 *
 * Edison Application Server
 *
 * V0.0.1 - schereja - Setting up initial server
 *
 */
//Used for performance testing
var beginning            = (new Date()).getTime()
// Required Modules
var express              = require('express');
var bodyParser           = require('body-parser');
var path                 = require('path');
var favicon              = require('serve-favicon');
var fs                   = require('fs');
var http                 = require('http');

var app                  = express();

var router               = express.Router();
var pub                  = __dirname;
// Middleware

/**
  Setting body parser to work with json
 */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(pub + '/public')));
app.use(favicon(path.join(pub, 'public', 'img', 'favicon.ico')));
app.set('port', process.env.PORT || 3000);

/*
  Setting default views path
 */
app.set('views', path.join(pub, 'public'));

/*
  Setting default template engine to jade
 */
app.set('view engine', 'jade');

app.use(function(req, res, next) {
  console.log("Method: " + req.method + " URL: " + req.url);
  next();
});


fs.readdirSync(path.join(pub,'slabs')).forEach(function (slabFolder) {
  fs.readdirSync(path.join(pub,'slabs', slabFolder, 'controller')).forEach(function(slabName){
    if(slabName.substr(-3) == '.js') {
      var route=path.join(pub,'controllers',folder,file)
      require(route)(app);
    }
  });

});
/*
fs.readdirSync(path.join(pub,'controllers')).forEach(function (folder) {
  fs.readdirSync(path.join(pub,'controllers', folder)).forEach(function(file){
    if(file.substr(-3) == '.js') {
      var route=path.join(pub,'controllers',folder,file)
      console.log(route);
    }
  });

});
*/
app.use("/api", router);

app.listen(3000);
