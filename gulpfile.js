const gulp = require('gulp');
const stripCssComments = require('gulp-strip-css-comments');

const paths = {
    srcHTML: './src/**/*.html',
    srcAssets: './src/**/*.{jpg,svg,png,json}',
    srcCSS: './src/**/*.css',
    srcJS: './src/**/*.js',
    dist: "./release/dev_201/",
};

gulp.task('release', ['html', 'assets', 'css', 'js']);

gulp.task('assets', function() {
    return gulp.src(paths.srcAssets).pipe(gulp.dest(paths.dist));
});
gulp.task('html', function() {
    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.dist));
});

gulp.task('css', function() {
    return gulp.src(paths.srcCSS)
        .pipe(stripCssComments())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('js', function() {
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.dist));
});