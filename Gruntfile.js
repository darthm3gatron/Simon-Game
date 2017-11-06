module.exports = function(grunt) {
    'use-strict';
    var file_list = [
        'js/simon.js',
        'Gruntfile.js'
    ];
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            quotmark: 'single',
            unused: true,
            strict: true,
            trailing: true,
            browser: true,
            gobals: {
                node: true,
                jQuery: true,
                global: true,
                Meteor: true,
                Accounts: true,
                _:true,
                Ideas: true,
                RouterController: true,
                HomeController: true,
                using: true,
                define: true,
                Notifications: true,
                Session: true,
                Router: true,
                Template: true,
                process: true
            },
            boss: true,
            laxcomma: true,
            globalstrict: true
        },
        uses_defaults: file_list.concat(['Gruntfile.js'])
    },
    watch: {
        scripts: {
            files: file_list,
            tasks: ['jshint'],
            options: {
                spawn: false,
                interrupt: true
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint']);
    grunt.event.on('watch', function(action, filepath) {
        grunt.config('jshint.uses_defaults', filepath);
    });
};