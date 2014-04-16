module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            demo: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        },
        replace: {
            example: {
                src: ['src/*'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['connect']);
    grunt.registerTask('build', ['replace']);

};
