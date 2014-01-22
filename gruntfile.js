/*global module:false*/

module.exports = function(grunt) {

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  src: 'src/**/*.js',
  jasmine: {
    pivotal: {
      src: '<%= src %>',
      
      options: {
        specs: 'test/spec.js',
        keepRunner: true
      }
    }
  },
  jshint: {
    files: '<%= src %>',
    options: {
      globals: {
        console: true,
        module: true,
        document: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-jasmine');

grunt.registerTask('test', ['jshint','jasmine']);

};
