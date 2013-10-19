
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var helloworld = require('./routes/helloworld');
var http = require('http');
var path = require('path');
var config = require('./config')();
var MongoClient = require('mongodb').MongoClient;

var app = express();

// all environments
app.set('port', config.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/helloworld', helloworld.helloworld);

var mongoDbConnection = 'mongodb://'+ config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.dbName;
MongoClient.connect(mongoDbConnection, function(err, db) {
  if(err) {
    console.log('Sorry, there is no mongo db server running. Connection string is \'' + mongoDbConnection + '\'');
  } else {
    var attachDB = function(req, res, next) {
      req.db = db;
      next();
    };
    http.createServer(app).listen(app.get('port'), function(){
	  console.log('Using mongodb server at \'' + mongoDbConnection + '\'');
      console.log('Express server listening on port ' + app.get('port'));
    });
  }
});
