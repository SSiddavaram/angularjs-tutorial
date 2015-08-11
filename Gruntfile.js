
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		// Project settings
		yeoman: {
			// configurable paths
			app:  'src',
			dist: 'dist'
		},

		watch: {
			gruntfile: {
		        files: ['Gruntfile.js']
		    }
		},

		/*connect: {
			run: {
				port: 1337,
				base: 'src'
			}
		},*/

		// The actual grunt server settings
	    connect: {
	      options: {
	        port: 9001,
	        // Change this to '0.0.0.0' to access the server from outside.
	        hostname: 'localhost',
	        livereload: 35729
	      },
	      proxies: [{
	        /* TODO : Update this URL according to the new REST URL pattern */
	          context: '/RestfulWS',
	          host: 'localhost',
	          port: 8080,
	          headers: {
	            'REMOTE_USER': 'asiddavaram' 
	          }
	        }
	      ],
	      livereload: {
	        options: {
	          open: true,
	          base: [
	            '.tmp',
	            '<%= yeoman.app %>'
	          ],
	          middleware: function(connect, options) {
	            var middlewares = [];
	            options.base.forEach(function(base) {
	              // Serve static files.
	              middlewares.push(connect.static(base));
	            });
	            middlewares.push(proxySnippet);
	            return middlewares;
	          }
	        }
	      }
	    },

	    // Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
            			'<%= yeoman.dist %>/*',
            			'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		}	

	});
	
	  grunt.registerTask('local', [
	    'clean:server',
	    //'connect:run',
	    'configureProxies',
	    'connect:livereload',
	    'watch'
  	]);
};