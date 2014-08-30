var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function(){
  console.log("banana")
});

gulp.task('watch', function(){
  gulp.watch(['./src/lib/main.js'], ['compile:js'])
})


gulp.task('compile:js', function(){
  var bundle = browserify('./src/lib/main.js').bundle();
  bundle
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
})
