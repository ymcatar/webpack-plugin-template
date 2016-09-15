var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task('babel', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
  return gulp.start(['babel', 'html']);
});