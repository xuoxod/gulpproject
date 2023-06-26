import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

/* Source & Destination Base Directories */

const SOURCE = "./src/";
const DEST = "./dist/";

// ECMAs
export const ES7 = "ES7";
export const ES6 = "ES6";
export const ES5 = "ES5";

/* JavaScript */

// JavaScript File Names
export const DEST_SCRIPTS_FILENAME = "script.js";
export const DEST_SCRIPTS_FILENAME_MIN = "script.min.js";
export const DEST_MODULES_FILENAME = "module.js";
export const DEST_MODULES_FILENAME_MIN = "module.min.js";
export const DEST_LIB_FILENAME = "lib.js";
export const DEST_LIB_FILENAME_MIN = "lib.min.js";

// JavaScript Source & Destination
export const JAVASCRIPT_SRC = `${SOURCE}js/`;
export const JAVASCRIPT_SCRIPT_SRC = `${SOURCE}js/scripts/`;
export const JAVASCRIPT_DESTINATION = `${DEST}js/`;

// Javascript Output
export const JAVASCRIPT_SCRIPTS_DEST = `${JAVASCRIPT_DESTINATION}/scripts/`;
export const JAVASCRIPT_SCRIPTS_DEST_MIN = `${JAVASCRIPT_DESTINATION}scripts/min/`;
export const JAVASCRIPT_LIB_DEST = `${JAVASCRIPT_DESTINATION}lib/`;
export const JAVASCRIPT_LIB_DEST_MIN = `${JAVASCRIPT_DESTINATION}lib/min/`;
export const JAVASCRIPT_CUSTOM_MODULES_DEST = `${JAVASCRIPT_DESTINATION}modules/`;
export const JAVASCRIPT_CUSTOM_MODULES_DEST_MIN = `${JAVASCRIPT_DESTINATION}modules/min/`;

/* TypeScrpt */

// TypeScript File Names
export const DEST_TYPESCRIPTS_FILENAME = "typescript.js";
export const DEST_TYPESCRIPTS_FILENAME_MIN = "typescript.min.js";

// TypeScript Source & Destination
export const TYPESCRIPT_SRC = `${SOURCE}ts/`;
export const TYPESCRIPT_DESTINATION = `${DEST}js/`;

// TypeScript Output
export const TYPESCRIPT_SCRIPTS_DEST = `${JAVASCRIPT_DESTINATION}scripts/`;
export const TYPESCRIPT_SCRIPTS_DEST_MIN = `${JAVASCRIPT_DESTINATION}scripts/min/`;

/* Sass, Scss  */

// CSS File Names
export const DEST_CSS_FILENAME = "style.css";
export const DEST_CSS_FILENAME_MIN = "style.min.css";

// CSS, Scss Source & Destination
export const SASS_SRC = `${SOURCE}scss/`;
export const CSS_DESTINATION = `${DEST}css/`;

// CSS Output
export const CSS_DEST = `${CSS_DESTINATION}`;
export const CSS_DEST_MIN = `${CSS_DESTINATION}min/`;
export const CSS_SOURCEMAP_DEST = `sourcemap/`;
export const CSS_SOURCEMAP_DEST_MIN = `sourcemap/min/`;
