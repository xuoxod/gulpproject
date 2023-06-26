import gulp from "gulp";
import url from "url";

import {
  javascript,
  javascriptMin,
  sassscript,
  sassscriptCompressed,
  sassscriptSourcemap,
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
