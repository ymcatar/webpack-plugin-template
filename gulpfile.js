var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('dist/**/*.*')
    .pipe(clean());
});

gulp.task('babel', ['clean'], function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('static', ['clean'], function () {
  return gulp.src(['src/**/*.**', '!src/**/*.js'])
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
  return gulp.start(['babel', 'static']);
});
