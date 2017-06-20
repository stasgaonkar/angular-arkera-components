const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const using = require('gulp-using');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const tslint = require('gulp-tslint');

// Lint Task
gulp.task('tslint', function() {
  return gulp.src('src/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report({ emitter: false }));
});


// clean the contents of the distribution directory
gulp.task('clean', ['tslint'], function () {
  return del('dist/**/*');
});

// Compile the typescript files
gulp.task('compile', ['tslint', 'clean'], function () {
  //return gulp.src('src/**/*.ts').pipe(using());
  return gulp
    .src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

// Copy the dependencies
gulp.task('copy-dependencies', ['clean'], function() {
  return gulp.src([
      'src/**/*.html',
      'src/index.html',
      'src/styles.css',
      'src/systemjs.config.js',
      'src/systemjs-angular-loader.js'
    ])
    .pipe(gulp.dest('dist'))
});

// Compile .sass files
gulp.task('compile-sass', ['clean'], function() {
  return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', ['clean', 'compile-sass', 'copy-dependencies'], function() {
  return gulp.src('dist/**/*.css')
    .pipe(cleanCss({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['tslint', 'clean', 'compile', 'compile-sass', 'minify-css', 'copy-dependencies']);

gulp.task('default', ['build']);
