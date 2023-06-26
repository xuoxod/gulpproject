import gulp from "gulp";
import sass from "gulp-dart-sass";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import url from "url";
import ts from "gulp-typescript";

import {
  javascript,
  javascriptMin,
  sassscript,
  sassscriptCompressed,
  sassscriptSourcemap,
  sassscriptSourcemapCompressed,
  cleanDist,
} from "./tasks/index.js";

const { series, parallel } = gulp;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const buildJavascript = javascript;

export const buildJavascriptMin = javascriptMin;

export const buildSassscript = sassscript;

export const buildSassscriptCompressed = sassscriptCompressed;

export const buildSassscriptSourcemap = sassscriptSourcemap;

export const clean = cleanDist;

export const buildAll = parallel(
  series(buildJavascript, buildJavascriptMin),
  series(buildSassscript, buildSassscriptCompressed, buildSassscriptSourcemap)
);

export const buildAllClean = series(
  clean,
  parallel(
    series(buildJavascript, buildJavascriptMin),
    series(buildSassscript, buildSassscriptCompressed, buildSassscriptSourcemap)
  )
);

export default buildAllClean;
