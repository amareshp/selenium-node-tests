/**
 * Created by apattanaik on 8/17/2014.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        simplemocha: {
            options: {
                globals: ['should'],
                timeout: 3000,
                ignoreLeaks: false,
                // grep: 'test',
                ui: 'bdd',
                reporter: 'tap'
            },

            all: { src: ['test/**/*.js'] }
        }
    });

    grunt.loadNpmTasks('grunt-simple-mocha');

    grunt.registerTask('default', ['simplemocha']);
}