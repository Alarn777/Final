const gulp = require('gulp');
const stripCssComments = require('gulp-strip-css-comments');

const paths = {
    srcHTML: './src/**/*.html',
    srcPHP: './src/**/*.php',
    srcAssets: './src/**/*.{jpg,svg,png,json}',
    srcCSS: './src/**/*.css',
    srcJS: './src/**/*.js',
    //dist: "./release/dev_208/",
    dist: "C:/xampp/htdocs/"
};

gulp.task('release', ['html', 'php', 'assets', 'css', 'js']);

gulp.task('assets', function() {
    return gulp.src(paths.srcAssets).pipe(gulp.dest(paths.dist));
});
gulp.task('html', function() {
    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.dist));
});
gulp.task('php', function() {
    return gulp.src(paths.srcPHP).pipe(gulp.dest(paths.dist));
});

gulp.task('css', function() {
    return gulp.src(paths.srcCSS)
        .pipe(stripCssComments())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('js', function() {
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.dist));
});