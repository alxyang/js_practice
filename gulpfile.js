// Include main components
var gulp = require('gulp');
var gutil = require('gulp-util');
var lr = require('tiny-lr');

// Include CSS components
var less = require('gulp-less');
var prefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

// Include JS components
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Include utilities
var rename = require("gulp-rename");
var livereload = require('gulp-livereload');
var server = lr();

// Source and Target directories
var sourceCSS = 'source/css';
var targetCSS = 'public/css';

var sourceJS = 'source/js';
var targetJS = 'public/js';

// LESS compilation
gulp.task('css', function () {
    gulp.src('source/css/app.css')
        .pipe(minifycss())
        .pipe(rename("app.min.css"))
        .pipe(gulp.dest('public/css'))
        .pipe(livereload(server));
});

gulp.task('js', function() {
    gulp.src([sourceJS + '/app.js',
              sourceJS + '/app2.js'])
        .pipe(concat("app.min.js"))
        .pipe(uglify({mangle: true}).on('error', gutil.log))
        .pipe(gulp.dest(targetJS))
        .pipe(livereload(server));
});

// LiveReload
gulp.task('livereload', function(next) {
    server.listen(35729, function(err) {
        if (err) return console.error(err);
        next();
    });
});

// Watch for CSS and JS changes and run the respective compilers automatically
gulp.task('watch', function () {
    //syntax is direcotry, taskname
    gulp.watch('source/css/app.css', ['css']);
    gulp.watch(sourceJS + '/app.js', ['js']);
});

gulp.task('default', ['livereload', 'css', 'js', 'watch']);
// gulp.task('default', function () {
//
//   startExpress();
// });
