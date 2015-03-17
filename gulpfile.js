var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

gulp.task('img', function() {
	return gulp.src('./img/**')
				.pipe(livereload());
});
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('*.html', ['html']);
  //gulp.watch('img/**', ['img']);
});