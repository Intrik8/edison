module.exports = function( app ) {
    var express = require( 'express' )
      , router = express.Router()
      , fs = require( 'fs' )
      , routes = [];

    router.all( 'app/*', function( req, res, next ) {

        // Should check if user has valid authentication.

        next();
    });

    // Read dir to get all files into it.
    // In this case you can read sync because this
    // script just runs once ( when nodejs starts ).
    routes = fs.readdirSync( './slabs' );
    
    console.log(routes);
    // Travel all private routes files.
    //routes.forEach( function( routeFile ) {
        // Require and execute route module.
    //    require(routeFile )( app );
    //});

    app.use( '/api', router );
};
