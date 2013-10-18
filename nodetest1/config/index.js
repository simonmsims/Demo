/*
 * Configuration
 */
 
var config = {
  local: { 
    mode: 'local', 
	port: 3000, 
	mongodb: { 
	  host: 'localhost', 
	  port: 27017,
	  dbName: 'nodetest1',
	} 
  },
  staging: { 
    mode: 'staging', 
	port: 4000, 
	mongodb: { 
	  host: 'localhost', 
	  port: 27017,
	  dbName: 'nodetest1',
	} 
  },
  production: { 
    mode: 'production', 
	port: 5000, 
	mongodb: { 
	  host: 'localhost', 
	  port: 27017,
      dbName: 'nodetest1',	  
	}
  }
}

module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local' || config.local];
}