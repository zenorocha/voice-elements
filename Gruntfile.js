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
        },
        bump: {
            options: {
                commit: true,
                commitFiles: ['bower.json', 'dist/*'],
                commitMessage: 'Release v%VERSION%',
                createTag: true,
                files: ['bower.json'],
                push: true,
                pushTo: 'origin gh-pages',
                tagMessage: '',
                tagName: 'v%VERSION%'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['connect']);
    grunt.registerTask('build', ['replace']);

};
