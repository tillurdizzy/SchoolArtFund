/* required methods */
var gulp			= require('gulp');
var gutil			= require('gulp-util');
var jshint          = require('gulp-jshint');
var concat			= require('gulp-concat');
var rename			= require('gulp-rename');
var uglify			= require('gulp-uglify');
var runSequence		= require('gulp-run-sequence');
var watch			= require('gulp-watch');
var sass			= require('gulp-sass');
var postcss			= require('gulp-postcss');
var csswring		= require('csswring');
var autoprefixer	= require('autoprefixer-core');
var lost			= require('lost');
var rucksack 		= require('gulp-rucksack');
var sourcemaps 		= require('gulp-sourcemaps');


/* tasks */

gulp.task('devjs', function () {
	return gulp.src([
		'public/resources/js/*.js',
		'public/resources/js/controllers/*.js',
		'public/resources/js/directives/*.js',
		'public/resources/js/services/*.js'])
	.pipe(concat('dev.js'))
	.pipe(gulp.dest('public/resources/dist'));

});

/* vendor dependencies */
gulp.task('depsjs',function(){
	return gulp.src([
		'bower_components/angular/angular.min.js',
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/modernizr/modernizr.js',
		'bower_components/angular-animate/angular-animate.min.js',
		'bower_components/angular-sanitize/angular-sanitize.min.js',
		'bower_components/angular-ui-router/release/angular-ui-router.min.js',
		'bower_components/angular-smart-table/dist/angular-smart-table.min.js',
		'bower_components/angular-foundation/mm-foundation-tpls.min.js',
		'bower_components/angular-slick/dist/slick.min.js'])
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('public'));
});

gulp.task('distjs', function(){
	return gulp.src(['public/deps.js'])
	.pipe(rename('deps.min.js'))
	.pipe(uglify())
	.on('error',console.error.bind(console))
	.pipe(gulp.dest('bin'));
});

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('public/resources/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});



gulp.task('styles', function(){
	var processors=[
		csswring,autoprefixer,lost
	];
	return gulp.src(['scss/styles.scss'])
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(postcss(processors))
	.pipe(sourcemaps.write('public/resources/css'))
	.pipe(gulp.dest('public/resources/css'));
});


gulp.task('watch', function(){
    gulp.watch('public/resources/js/**/*.js', ['jshint']);
	gulp.watch(['scss/*.scss'],['sass']);
});

// define the default task and add the watch task to it
gulp.task('default', ['watch']);