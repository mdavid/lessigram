import gulp from 'gulp';


export const WATCH_TASK = 'watch';


/**
 * Watch asset and CSS directories and perform the respective tasks on change.
 */
export function watch() {

  const {
    INCLUDE_HTML_JADE,
    BUILD_HTML_JADE_TASK,
  } = require('./build-html-jade');

  const {
    INCLUDE_CSS_STYL,
    BUILD_CSS_STYLUS_TASK,
  } = require('./build-css-stylus');

  const {
    INCLUDE_JS,
    BUILD_JS_TASK,
  } = require('./build-js');

  const {
    INCLUDE_ASSETS,
    COPY_ASSETS_TASK,
  } = require('./copy-assets');

  gulp.watch([INCLUDE_HTML_JADE], [BUILD_HTML_JADE_TASK]);
  gulp.watch([INCLUDE_CSS_STYL], [BUILD_CSS_STYLUS_TASK]);
  gulp.watch([INCLUDE_JS], [BUILD_JS_TASK]);
  gulp.watch([
    INCLUDE_ASSETS,
    `!${INCLUDE_HTML_JADE}`,
    `!${INCLUDE_CSS_STYL}`,
    `!${INCLUDE_JS}`,
  ], [COPY_ASSETS_TASK]);
}


// Export task.
gulp.task(WATCH_TASK, watch);
