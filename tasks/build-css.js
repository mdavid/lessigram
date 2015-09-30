import gulp from 'gulp';
import {BUILD_CSS_STYLUS_TASK} from './build-css-stylus';


export const BUILD_CSS_TASK = 'build-css';


// Export task.
gulp.task(BUILD_CSS_TASK, [
  BUILD_CSS_STYLUS_TASK,
]);
