var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

/**
 * Specify config for tasks
 */
var config = {
    html: 'src/client/**/*.html',
    scss:'src/client/sass/**/*.scss',

    dist: 'dist',
    distJs: 'dist/js',
    distCss: 'dist/css',
    css: [
    ],

    js:  [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/lodash/lodash.js',
        'node_modules/restangular/dist/restangular.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js',
        'node_modules/tinymce/tinymce.min.js',
        'node_modules/angular-ui-tinymce/dist/tinymce.min.js',
        //modules
        'src/client/js/app.js',
        //controllers
        'src/client/js/controllers/articles.js',
        'src/client/js/controllers/article-view.js',
        'src/client/js/controllers/article-add.js',
        'src/client/js/controllers/article-edit.js',
        'src/client/js/controllers/article-delete.js',
        'src/client/js/controllers/TinyMce.js'
    ]
};

/**
 * Copy index file
 */
gulp.task('copy', function () {
    gulp.src( config.html )
        .pipe( gulp.dest( config.dist ) );
});

/**
 * Copy copyTinymcePlugins
 */
gulp.task('copyTinymcePlugins', function () {
    gulp.src( 'node_modules/tinymce/plugins/*/**' )
        .pipe( gulp.dest( config.distJs + '/plugins' ) );
});

/**
 * Copy copyTinymceThemes
 */
gulp.task('copyTinymceThemes', function () {
    gulp.src( 'node_modules/tinymce/themes/*/**' )
        .pipe( gulp.dest( config.distJs + '/themes' ) );
});

/**
 * Copy copyTinymceSkins
 */
gulp.task('copyTinymceSkins', function () {
    gulp.src( 'node_modules/tinymce/skins/*/**' )
        .pipe( gulp.dest( config.distJs + '/skins' ) );
});



/**
 * watch index file
 */
gulp.task('html:watch', function () {
  gulp.watch(config.html, ['copy']);
});


/**
 * Start local server for development
 */
gulp.task('server', ['copy', 'copyTinymcePlugins', 'copyTinymceThemes', 'copyTinymceSkins'], function () {

    /**
     * Listening port can be specified manually via command `PORT=7777 gulp`
     */
    var serverPort = process.env.PORT || 9000;

    connect.server({
        root: config.dist,
        port: serverPort
    });

});

/**
 * build js files into one bundle
 */
gulp.task('scripts', function() {
  return gulp.src(config.js)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.distJs));
});

/**
 * compile sass into css
 */
gulp.task('sass', function () {
  return gulp.src(config.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.distCss));
});
 
/**
 * watch task for sass
 */
gulp.task('sass:watch', function () {
  gulp.watch(config.scss, ['sass']);
});

/**
 * watch task for js
 */
gulp.task('js:watch', function () {
  gulp.watch(config.js, ['scripts']);
});

/**
 * Default gulp task
 */
gulp.task('default', ['server', 'scripts', 'sass', 'sass:watch', 'html:watch', 'js:watch']);
