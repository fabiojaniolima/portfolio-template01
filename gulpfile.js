var del =           require('del'),
    gulp =          require('gulp'),
    gulpif =        require('gulp-if'),
    sass =          require('gulp-sass'),
    uglify =        require('gulp-uglify'),
    rename =        require('gulp-rename'),
    htmlmin =       require('gulp-htmlmin'),
    imagemin =      require('gulp-imagemin'),
    gulpSequence =  require('gulp-sequence'),
    autoprefixer =  require('gulp-autoprefixer'),
    browserSync =   require('browser-sync').create();

var amb = 'dev';

gulp.task('clean', function () {
    return del([
        './src/assets/css',
        './src/assets/js',
        './dist'
    ]);
});

gulp.task('scss-to-css', function () {

    function scss(suffix, compressed, dest)
    {
        return gulp.src('./src/scss/**/*.scss')
            .pipe(autoprefixer())
            .pipe(sass({outputStyle: compressed}).on('error', sass.logError))
            .pipe(gulpif(suffix, rename({suffix: '.min'})))
            .pipe(gulp.dest(dest));
    }

    if(amb == 'dist') {
        scss(false, 'expanded', './dist/assets/css');
    }

    if (amb == 'prod' || amb == 'dist') {
        scss(true, 'compressed', './dist/assets/css');
    }

    return scss(true, 'expanded', './src/assets/css');
});

gulp.task('js', function () {

    function js(compressed, suffix, dest)
    {
        return gulp.src('./src/js/**/*.js')
            .pipe(gulpif(compressed, uglify()))
            .pipe(gulpif(suffix, rename({suffix: '.min'})))
            .pipe(gulp.dest(dest));
    }

    if(amb == 'dist') {
        js(false, false, './dist/assets/js');
    }

    if (amb == 'prod' || amb == 'dist') {
        js(true, true, './dist/assets/js');
    }

    return js(false, true, './src/assets/js');
});

gulp.task('html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulpif(amb == 'prod', htmlmin({ collapseWhitespace: true, removeComments: true })))
        .pipe(gulp.dest('./dist'));
});

gulp.task('img', function () {
    return gulp.src('./src/assets/img/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('vendor', function () {
    return gulp.src('./src/assets/vendor/**/*')
        .pipe(gulp.dest('./dist/assets/vendor'));
})

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['scss-to-css']);
    gulp.watch('./src/assets/js/**/*.js', ['js']);
});

gulp.task('serve', ['watch'], function () {
    browserSync.init({
        server: {
            baseDir: './src/'
        }
    });
    gulp.watch(['./src/**/*.html'], browserSync.reload);
    gulp.watch(['./src/assets/css/**/*'], browserSync.reload);
    gulp.watch(['./src/assets/js/**/*'], browserSync.reload);
    gulp.watch(['./src/assets/img/**/*'], browserSync.reload);
});

gulp.task('default', ['clean'], function (cb) {
    gulpSequence(['scss-to-css', 'js'], cb);
});

gulp.task('dist', ['clean'], function (cb) {
    amb = 'dist';
    gulpSequence(['scss-to-css', 'js', 'img', 'html', 'vendor'], cb);
});

gulp.task('prod', ['clean'], function (cb) {
    amb = 'prod';
    gulpSequence(['scss-to-css', 'js', 'img', 'html', 'vendor'], cb);
});