'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: {
          './src/stylesheets/main.css': './src/stylesheets/main.scss'
        }
      }
    },

    autoprefixer: {
      dist: {
        src: './src/stylesheets/main.css' // globbing is also possible here
      }
    },

    inline: {
      dist: {
        options:{
          cssmin: true
        },
        src: ['./src/index.html'],
        dest: ['./']
      }
    },

    watch: {
      files: [
        './src/stylesheets/main.scss',
        './dist/*.js',
        './src/index.html',
      ],
      tasks: ['sass:dist', 'autoprefixer:dist', 'inline:dist'],
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
    'autoprefixer:dist',
    'inline:dist',
    'concurrent'
  ]);
};
