var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('coffee', function() {
    gulp.src('./assets/coffee/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('./public/assets/js/'))
});

gulp.task('sass', function () {
    gulp.src('./assets/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/sass/**/*.sass', ['sass']);
    gulp.watch('./assets/coffee/*.coffee', ['coffee']);
});