import gulp from "gulp";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import sourcemaps from "gulp-sourcemaps";
import {
  JAVASCRIPT_SCRIPT_SRC,
  DEST_SCRIPTS_FILENAME,
  JAVASCRIPT_SCRIPTS_DEST,
  JAVASCRIPT_SCRIPTS_DEST_MIN,
  DEST_SCRIPTS_FILENAME_MIN,
} from "../../custom_modules/sources.js";

const { src, dest } = gulp;

export const javascriptMin = (cb) => {
  src(`${JAVASCRIPT_SCRIPT_SRC}*.js`)
    .pipe(concat(DEST_SCRIPTS_FILENAME_MIN))
    .pipe(uglify())
    .pipe(dest(`${JAVASCRIPT_SCRIPTS_DEST_MIN}`));
  cb();
};

export const javascript = (cb) => {
  src(`${JAVASCRIPT_SCRIPT_SRC}*.js`)
    .pipe(concat(DEST_SCRIPTS_FILENAME))
    .pipe(dest(`${JAVASCRIPT_SCRIPTS_DEST}`));
  cb();
};

export const scriptTasks = [javascript, javascriptMin];
