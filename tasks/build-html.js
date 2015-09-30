import gulp from 'gulp';
import {BUILD_HTML_JADE_TASK} from './build-html-jade';


export const BUILD_HTML_TASK = 'build-html';


// Export task.
gulp.task(BUILD_HTML_TASK, [
  BUILD_HTML_JADE_TASK,
]);
