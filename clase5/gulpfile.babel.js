import gulp from 'gulp';
import babel from 'gulp-babel';

/*
* gulp.task()
* gulp.src()
*gulp.dest()
*gulp.watch()
* */
gulp.task('es6',()=> {
    gulp.src('./es6/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./es5'))
});