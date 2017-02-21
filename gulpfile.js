var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
       baseDir: "./",
       proxy: '127.0.0.1:4000',
       port: 4000,
       open: true,
       notify: false
    }
  });
});

gulp.task('styles', function() {
  return gulp.src(['/scss/main.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch("scss/**/*.scss", ['styles']);
});
