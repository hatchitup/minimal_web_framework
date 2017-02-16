module.exports = function(gulp, options, plugins) {

    // Styles
    gulp.task('styles', function() {

        var comment = '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %>\n' +
            ' * <%= pkg.description %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * Copyright (c) 2017-' + (new Date()).getFullYear() + ' Hatch It Up, Inc. All Rights Reserved.\n' +
            ' * Are you a frontend Ninja? work with us! email at  <%= pkg.career %> \n' +
            ' */\n';


        var srcThing = gulp.src(['sass/paper-dashboard.scss']);

        return srcThing
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(plugins.rename({ basename: 'app', suffix: '.min' }))



        .pipe(plugins.if((options.min !== false), plugins.cleanCss({ keepSpecialComments: 0, compatibility: 'ie8', debug: true },
            function(details) {
                console.log(details.name + ': ' + details.stats.originalSize);
                console.log(details.name + ': ' + details.stats.minifiedSize);
            }
        )))

        .pipe(plugins.banner(comment, {
                pkg: options.pkg
            }))
            .pipe(gulp.dest('./public/'))
            .pipe(plugins.livereload())
            .pipe(plugins.notify({ message: 'Styles task complete' }));
    });


};