var gulp = require("gulp"),
    browserSync = require('browser-sync'),
    jade = require('gulp-jade');

//Pathes for tasks
var path = {
    jadePath: './app/_dev/markups/pages/*.jade',
    baseDir: './app'
};

//Jade task from app/markups/pages to app
gulp.task('jade', function() {
    var YOUR_LOCALS = {};
    gulp.src('./app/_dev/markups/pages/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: '\t'
        }))
        .pipe(gulp.dest('./app/'))
});

//browser-sync server task for app
gulp.task('server',function(){
    browserSync({
        port:9000,
        online:true,
        server:{
            baseDir: baseDir
        }

    });
});

//watch task for browser-sync
gulp.task('watch',function(){
    gulp.watch([
        'app/*html',
        'app/js/**/*.js',
        'app/css/**/*.css'
    ]).on('change', browserSync.reload);
});

//watch task for jade
gulp.task('jadeWatch', function() {
   gulp.watch(path.jadePath, ['jade']);
});

//default task
gulp.task('default',['jadeWatch','server','watch']);