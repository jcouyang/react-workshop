var gulp = require('gulp');
var browserify = require('browserify');
var less = require('gulp-less');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  source: './components/react-workshop.jsx',
  less: ['less/*.less'],
	jsx: ['components/*.jsx'],
  javascripts: 'javascripts',
  stylesheets: 'stylesheets'
};

gulp.task('browserify', function() {
  return browserify({
    entries: paths.source,
    debug: true,
    extensions: ['.jsx','.js']
  })
    .transform(['reactify',{es6:true},'envify'])
    .bundle()
    .pipe(source('react-workshop.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
	  .pipe(gulp.dest(paths.javascripts));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsx, ['browserify']);
  gulp.watch(paths.less, ['less']);
});

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.stylesheets));
});

gulp.task('build', ['browserify','less']);
