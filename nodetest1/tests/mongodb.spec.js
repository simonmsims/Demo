/*
 * MongoDB test coverage.
 */

 describe("MongoDB", function() {
   it("is there a server running", function(next) {
     var config = require('../config')('local');
     var MongoClient = require('mongodb').MongoClient;
	 var mongoDbConnection = 'mongodb://'+ config.mongo.host + ':' + config.mongo.port + '/nodetest1';
	 MongoClient.connect(mongoDbConnection, function(err, db) {
       expect(err).toBe(null);
     });
	 next();
   });
 });
 