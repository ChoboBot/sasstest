var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

gulp.task('sass', function () {
    return sass('style.scss', {
      sourcemap: true,
      style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('sassTest'));
});

gulp.task('watch', function() {
  gulp.watch(['sassTest']);
});

gulp.task('webserver', function() {
    gulp.src('sassTest')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch', 'sass','webserver']);
