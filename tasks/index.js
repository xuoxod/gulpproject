import gulp from "gulp";
import { deleteSync } from "del";

import { javascript, javascriptMin } from "./javascript/JavascriptTasks.js";
import { typescript, typescriptMin } from "./typescript/TypescriptTasks.js";
import {
  sassscript,
  sassscriptCompressed,
  sassscriptSourcemap,
  sassscriptSourcemapCompressed,
} from "./sass/SassTasks.js";

const cleanDist = (cb) => {
  deleteSync(["dist"], cb());
};

export {
  javascript,
  javascriptMin,
  sassscript,
  sassscriptCompressed,
  sassscriptSourcemap,
  sassscriptSourcemapCompressed,
  cleanDist,
};
