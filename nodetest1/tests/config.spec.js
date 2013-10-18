/*
 * Configuration test coverage.
 */

 describe("Configuration setup.", function() {
   /*it("should load local configuration", function(next) {
	 var config = require('../config')();
	 expect(config.port).toBe(3000);
	 expect(config.mode).toBe('local');
     next();
   });*/
   it("should load local configuration", function(next) {
	 var config = require('../config')('local');
	 expect(config.mode).toBe('local');
	 expect(config.port).toBe(3000);
	 expect(config.mongo).toBeDefined();
	 expect(config.mongo.host).toBe('localhost');
	 expect(config.mongo.port).toBe(27017);
	 expect(config.mongo.dbName).toBe('nodetest1');
     next();
   });
   it("should load local configuration", function(next) {
     var config = require('../config')('staging');
	 expect(config.mode).toBe('staging');
	 expect(config.port).toBe(4000);
	 expect(config.mongo).toBeDefined();
	 expect(config.mongo.host).toBe('localhost');
	 expect(config.mongo.port).toBe(27017);
	 expect(config.mongo.dbName).toBe('nodetest1');
     next();
   });
   it("should load local configuration", function(next) {
     var config = require('../config')('production');
	 expect(config.mode).toBe('production');
	 expect(config.port).toBe(5000);
	 expect(config.mongo).toBeDefined();
	 expect(config.mongo.host).toBe('localhost');
	 expect(config.mongo.port).toBe(27017);
	 expect(config.mongo.dbName).toBe('nodetest1');
     next();
   });
 });