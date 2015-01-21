var gulp       = require('gulp');
var del        = require('del');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var minifyCSS  = require('gulp-minify-css');
var livereload = require('gulp-livereload');

gulp.task('clean', function (cb) {
  del.sync('dist');
  cb();
});

gulp.task('build', function () {
  var javascripts = [
    'bower_components/simple-module/lib/module.js',
    'bower_components/simple-hotkeys/lib/hotkeys.js',
    'bower_components/simple-uploader/lib/uploader.js',
    'bower_components/simditor/lib/simditor.js',
    'initialize.js'];
  gulp.src(javascripts)
    .pipe(uglify())
    .pipe(concat('vanilla-simditor.min.js'))
    .pipe(gulp.dest('dist/js'));

  var stylesheets = [
    "bower_components/fontawesome/css/font-awesome.css",
    "bower_components/simditor/styles/simditor.css"];
  gulp.src(stylesheets)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(concat('vanilla-simditor.min.css'))
    .pipe(gulp.dest('dist/css'));

  gulp.src('bower_components/fontawesome/fonts/*')
    .pipe(gulp.dest('dist/fonts'))

  var files = [
    'default.php',
    'README.md',
    'LICENCE'];
  gulp.src(files)
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'build']);
