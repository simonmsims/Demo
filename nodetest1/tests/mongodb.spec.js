/*
 * MongoDB test coverage.
 */

 var config = require('../config')('local');
 describe("MongoDB", function() {
   it("is there a server running", function(next) {
     var MongoClient = require('mongodb').MongoClient;
	 var mongoDbConnection = 'mongodb://'+ config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.dbName;
	 MongoClient.connect(mongoDbConnection, function(err, db) {
       expect(err).toBe(null);
     });
	 next();
   });
 });
 