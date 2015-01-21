var gulp       = require('gulp')
  , concat     = require('gulp-concat')
  , uglify     = require('gulp-uglify')
  , livereload = require('gulp-livereload');

gulp.task('build', function () {
  var javascripts = [
    'bower_components/simditor/lib/simditor.js',
    'initialize.js'];
  gulp.src(javascripts)
    .pipe(uglify())
    .pipe(concat('vanilla-simditor.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
