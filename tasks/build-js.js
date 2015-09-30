import gulp from 'gulp';
import {
  PUBLIC_DIR,
  BUILD_DIR,
} from './constants';


export const BUILD_JS_TASK = 'build-js';
export const INCLUDE_JS = `${PUBLIC_DIR}/**/*.js`;

const RELATIVE_PATH_TO_JS = 'scripts/main.js';
const ENTRY_JS = `${PUBLIC_DIR}/${RELATIVE_PATH_TO_JS}`;


/**
 *
 */
export function buildJS() {

  const browserify = require('browserify');
  const babelify = require('babelify');
  const source = require('vinyl-source-stream');

  browserify({
    entries: [ENTRY_JS],
    debug: true
  })
  .on('error', function(error) {
    console.log(error.toString());
    this.emit('end');
  })
  .transform(babelify)
  .bundle()
  .pipe(source(RELATIVE_PATH_TO_JS))
  .pipe(gulp.dest(BUILD_DIR));

}


// Export task.
gulp.task(BUILD_JS_TASK, buildJS);
