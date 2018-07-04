module.exports = function( grunt ) {

 	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        concat: {
      		options: {
        		separator: '\n\n',
				banner: '/**\n * <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>' +
			            '\n * Description: Velocity Breeze provides default implementation and bootstrapping of Velocity Components using Breeze.' +
			            '\n * License: <%= pkg.license %>' +
			            '\n * Author: <%= pkg.author %>' +
			            '\n */\n\n'
      		},
      		dist: {
        		src: [	'src/**/*.js'
					],
        		dest: 'dist/velocity-breeze.js'
      		}
    	},
    	uglify: {
			options: {
				banner: '/**\n * <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>' +
			            '\n * Description: Velocity Breeze provides default implementation and bootstrapping of Velocity Components using Breeze.' +
			            '\n * License: <%= pkg.license %>' +
			            '\n * Author: <%= pkg.author %>' +
			            '\n */\n\n'
			},
      		main_target: {
	        	files: {
	          		'dist/velocity-breeze.min.js': [ 'dist/velocity-breeze.js' ]
	        	}
      		}
    	}
    });

    grunt.registerTask( 'default', [ 'concat', 'uglify' ] );
};
