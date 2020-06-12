const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const browserSync = require("browser-sync").create();

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

function browser() {
  browserSync.init({
    server: "./",
    port: 8080,
  });
}

exports.sass = sass;
exports.browser = browser;
