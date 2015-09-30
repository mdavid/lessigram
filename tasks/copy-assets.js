import gulp from 'gulp';
import {
  PUBLIC_DIR,
  BUILD_DIR,
} from './constants';


export const COPY_ASSETS_TASK = 'copy-assets';
export const INCLUDE_ASSETS = `${PUBLIC_DIR}/**/*`;


/**
 * Copy non-compiled assets.
 */
export function copyAssets() {

  const {
    PUBLIC_DIR,
    BUILD_DIR,
  } = require('./constants');

  const {INCLUDE_HTML_JADE} = require('./build-html-jade');
  const {INCLUDE_CSS_STYL} = require('./build-css-stylus');
  const {INCLUDE_JS} = require('./build-js');

  const sources = [
    INCLUDE_ASSETS,
    `!${INCLUDE_HTML_JADE}`,
    `!${INCLUDE_CSS_STYL}`,
    `!${INCLUDE_JS}`,
  ];

  return gulp.src(sources, { base: PUBLIC_DIR })
    .pipe(gulp.dest(BUILD_DIR));

}


// Export task.
gulp.task(COPY_ASSETS_TASK, copyAssets);
