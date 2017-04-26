const gulp = require('gulp')
const browserify = require('browserify')
gulp.task('compileES6index',()=>{
    browserify('index.js').transform('babelify',{presets:['es2015','react']}).bundle().pipe(require('fs').createWriteStream('public/js/index.js'))
})
