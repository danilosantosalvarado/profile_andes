// Include gulp.
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');
var autoprefix  = require('gulp-autoprefixer');
var sourcemaps  = require('gulp-sourcemaps');
var $           = require('gulp-load-plugins')();  // Si encuentra un error salte y continue conl las tareas
var sassLint    = require('gulp-sass-lint');      //intérprete de JavaScript SCSS sintaxis

var options = {};

// Style related.
// options.styleSRC           = './scss/**/*.scss';
// options.styleDestination   = './css';
// options.JsSRC              = 'js/*.js';
// options.JsDestination      = './js';


// Set the URL used to access the Drupal website under development. This will
// allow Browser Sync to serve the website and update CSS changes on the fly.
options.drupalURL = 'andes.dev.local';

// Define which browsers to add vendor prefixes for.
// http://browserl.ist/?q=last+5+version
options.autoprefixer = {
  browsers: [
    'last 5 versions',
    '> 1%',
    'Ie 9',
    'Ie 10'
  ]
};

// ##########
// Build CSS.
// ##########
gulp.task('style', function(){
  return gulp.src('./scss/**/*.scss')
    .pipe(plumber({
      errorHandler: function (error) {
        notify.onError({
          title:    "Gulp",
          subtitle: "Failure!",
          message:  "Error: <%= error.message %>",
          sound:    "Beep"
        }) (error);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
    .pipe($.sass({
      includePaths: [options.sassPaths],
      outputStyle: 'expanded',
      errLogToConsole: true,
      includePaths: './scss/**/*.scss',
    }))
    .pipe(autoprefix(options.autoprefixer))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({ stream: true, match: '**/*.css' })); // Reloads style.css if that is enqueued.
});

// #########################
// Lint Sass and JavaScript.
// #########################+
// https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#bangformat
gulp.task('lint', ['lint:sass']);

//Lint Sass.
gulp.task('lint:sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe($.sassLint())
    .pipe($.sassLint.format());
});

// ##############################
// Watch for changes and rebuild.
// ##############################
// Watch task.
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['style']);
});

// Static Server + Watch
gulp.task('serve', ['style', 'watch', 'lint'], function() {
  if (!options.drupalURL) {
    return Promise.resolve();
  }
  return browserSync.init({
    proxy: options.drupalURL,
    noOpen: false
  });
});

// Default Task
gulp.task('default', ['serve']);


