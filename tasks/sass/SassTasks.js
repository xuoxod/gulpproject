import gulp from "gulp";
import sass from "gulp-dart-sass";
import sourcemaps from "gulp-sourcemaps";

import {
  SASS_SRC,
  CSS_DEST,
  CSS_DEST_MIN,
  CSS_SOURCEMAP_DEST,
} from "../../custom_modules/sources.js";

export const sassscript = (cb) => {
  return gulp
    .src(`${SASS_SRC}*.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(CSS_DEST));
};

export const sassscriptCompressed = (cb) => {
  return gulp
    .src(`${SASS_SRC}**/*.scss`)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest(CSS_DEST_MIN));
};

export const sassscriptSourcemap = (cb) => {
  return gulp
    .src(`${SASS_SRC}*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write(CSS_SOURCEMAP_DEST))
    .pipe(gulp.dest(CSS_DEST));
};

export const sassscriptSourcemapCompressed = (cb) => {
  return gulp
    .src(`${SASS_SRC}*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write(CSS_SOURCEMAP_DEST))
    .pipe(gulp.dest(CSS_DEST));
};

export const sassTasks = [
  sassscript,
  sassscriptCompressed,
  sassscriptSourcemap,
  sassscriptSourcemapCompressed,
];
