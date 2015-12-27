var gulp = require("gulp"),
    browserSync = require('browser-sync'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith'),
    postcss = require('gulp-postcss'),
    rucksack = require('rucksack-css');

//Pathes for tasks
var path = {
    jadePath: './app/_dev/pages/*.jade',
    jadeDir:'.app/_dev/**/*.jade',
    baseDir: './app',
    sass:'./app/_dev/scss/**/*.scss',
    sassDest:'./app/css',
    sprite: './app/images/icons/*.png',
    spriteDest: './app/_dev/sprites/'
};
var processors = [
    rucksack({
            autoprefixer: true
        })
]

//Sprite generate
gulp.task('sprite', function () {
  var spriteData = gulp.src(path.sprite).pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    padding: 70,
    cssFormat: 'scss',
    imgPath: '../_dev/sprites/sprite.png'
  }));
  return spriteData.pipe(gulp.dest(path.spriteDest));
});

//Jade task from app/markups/pages to app
gulp.task('jade', function() {
    var YOUR_LOCALS = {};
    gulp.src(path.jadePath)
        .pipe(plumber())
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: '\t'
        }))
        .pipe(gulp.dest(path.baseDir))
});

//Sass task
gulp.task('sass', function () {
  gulp.src(path.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(path.sassDest));
});

//browser-sync server task for app
gulp.task('server',function(){
    browserSync({
        port:9000,
        online:true,
        server:{
            baseDir: path.baseDir
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
gulp.task('fileWatch', function() {
    gulp.watch(path.jadePath, ['jade']);
    gulp.watch(path.sass, ['sass']);
});

//default task
gulp.task('default',['fileWatch','server','watch']);