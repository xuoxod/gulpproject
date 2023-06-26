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
} from "./tasks/index.js";

const { series, parallel } = gulp;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// const buildAll = parallel(
//   series(javascriptMin, typescriptMin),
//   series(javascript, typescript)
// );

const buildAll = parallel(series(javascriptMin), series(javascript));

// const buildTs = series(typescript, typescriptMin);

const buildJs = series(javascript, javascriptMin);

const buildSc = series(sassscript);

const buildScC = series(sassscriptCompressed);

const buildScSM = series(sassscriptSourcemap);

// export default buildJs;

// export default series(sassscript, sassscriptCompressed, sassscriptSourcemap);

// export default buildTs;
