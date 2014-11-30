'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'stylesheets/main.css': 'stylesheets/main.scss'
        }
      }
    },

    inline: {
      dist: {
        options:{
          cssmin: true
        },
        src: [ './index.html' ]
      }
    },

    watch: {
      files: [
        './stylesheets/**/*.scss',
        './dist/*.js',
        './index.html',
      ],
      tasks: ['sass:dist', 'inline:dist'],
      options: {
        spawn: false,
        livereload: true,
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          keepalive: true,
          livereload: true
        }
      }
    },

    concurrent: {
      tasks: ['watch', 'connect'],
      options: {
          logConcurrentOutput: true
      }
    },
  });

  grunt.registerTask('default', [
    'sass:dist',
    'inline:dist',
    'concurrent'
  ]);
};
