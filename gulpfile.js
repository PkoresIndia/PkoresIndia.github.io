const gulp = require('gulp')
const browserify = require('browserify')
const pages = ['index']
gulp.task('compileES6',()=>{
    pages.forEach((page)=>{
      browserify(`${page}.js`).transform('babelify',{presets:['es2015','react']}).bundle().pipe(require('fs').createWriteStream(`public/js/${page}.js`))
    })
})
