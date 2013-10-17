/*
 * MongoDB test coverage.
 */

 describe("MongoDB", function() {
   it("is there a server running", function(next) {
     var MongoClient = require('mongodb').MongoClient;
	 MongoClient.connect('mongodb://127.0.0.1:27017/nodetest1', function(err, db) {
       expect(err).toBe(null);
     });
	 next();
   });
 });
 