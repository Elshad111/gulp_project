var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin'); 
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var browserSync = require('browser-sync').create();

var config = {
	paths: {
		html: './public/index.html',
		img: './src/img/**'
	},
	output: {
		cssName: 'css/bundle.css',
		path: './public',
		img: './public/img'
	},
	isDevelop: true
};

gulp.task('scss', function(){
	return gulp.src(['./src/scss/main.scss', './src/scss/menu.scss', './src/scss/header.scss', './src/scss/services.scss', './src/scss/portfolio.scss', './src/scss/aboutus.scss', './src/scss/team.scss', './src/scss/others.scss', './src/scss/blog.scss', './src/scss/footer.scss'])
		.pipe(gulpIf(config.isDevelop, sourcemaps.init()))
		.pipe(sass())
		.pipe(concat(config.output.cssName))
		.pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))		
		.pipe(gulpIf(!config.isDevelop, cleanCss()))
		.pipe(gulpIf(config.isDevelop, sourcemaps.write()))		
		.pipe(gulp.dest(config.output.path))
		.pipe(browserSync.stream());		
});

// Images optimization and copy in /dist
gulp.task('images', function() {
  return gulp.src(config.paths.img)
    .pipe(cache(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imageminJpegRecompress({
        loops: 5,
        min: 65,
        max: 70,
        quality:'medium'
      }),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({quality: '65-70', speed: 5})
    ],{
      verbose: true
    })))
    .pipe(gulp.dest(config.output.img));
});

// Clearing the cache
gulp.task('clear', function (done) {
  return cache.clearAll(done);
});

gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: config.output.path
		}
	});
	gulp.watch(config.paths.scss, ['scss']);
	gulp.watch(config.paths.html).on('change', browserSync.reload);
});

gulp.task('default', ['scss', 'server']);