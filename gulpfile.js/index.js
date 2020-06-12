const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

function sass() {
  return gulp
    .src("./src/assets/style/sass/**/*.scss")
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest("./dist/assets/style/css"));
}

exports.sass = sass;
