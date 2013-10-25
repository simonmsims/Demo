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
	  dbName: 'nodetest1_local'
	  }
  },
  staging: { 
    mode: 'staging', 
	port: 4000, 
	mongodb: { 
	  host: 'localhost', 
	  port: 27017,
	  dbName: 'nodetest1_staging'
	  }
  },
  production: { 
    mode: 'production', 
	  port: 5000,
	  mongodb: {
	    host: 'localhost',
	    port: 27017,
      dbName: 'nodetest1_prod'
	  }
  }
}

module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local' || config.local];
}