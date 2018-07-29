const sass = require('node-sass');

require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    sass: {
		options: {
			implementation: sass,
			sourceMap: true
		},
		dist: {
			files: {
                '/wp-content/themes/double/library/css/style.css': '/wp-content/themes/double/library/sass/style.scss',
                '/wp-content/themes/double/library/css/ie.css': '/wp-content/themes/double/library/sass/ie.scss',
                '/wp-content/themes/double/library/css/login.css': '/wp-content/themes/double/library/sass/login.scss',
                '/wp-content/themes/double/library/css/gravity.css': '/wp-content/themes/double/library/sass/gravity.scss',
			}
		}
	},
    watch: {
      files: ['/wp-content/themes/double/library/sass/*'],
      tasks: ['sass:dist']
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.registerTask( 'default', ['sass'] );
  grunt.registerTaks( 'watch', ['sass'] );