module.exports = function(gulp, options, plugins) {

    gulp.task('watch', function() {
        gulp.watch(['plugins/*.js','client/*.jsx','client/src/*.jsx','client/src/**/*.jsx'], ['webpack'])
        gulp.watch(['./*.html'], ['copy'])
        //gulp.watch(['.tmp/*.js','.tmp/src/*.js','.tmp/src/**/*.js'], ['webpack'])
        gulp.watch(['sass/*.css', 'sass/*.scss'], ['styles'])
        plugins.livereload.listen();
    });

};