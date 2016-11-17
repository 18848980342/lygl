//加载组件
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    jst = require('gulp-cmd-jst');
//任务机制
gulp.task('jst',function(){
    gulp.src('static/view/*.html')
        .pipe(jst(
            {
                templateSettings: {
                  evaluate: /##([\s\S]+?)##/g,
                  interpolate: /\{\{(.+?)\}\}/g,
                  escape: /\{\{\{\{-([\s\S]+?)\}\}\}\}/g
                },
                //filter escape character 
                processContent: function(src) {
                  return src.replace(/(^\s+|\s+$)/gm, '');
                },
                //compress Jst 
                prettify: true, 
                //cmd: true || amd: true         
                cmd: true
            }
        ))
        .pipe(gulp.dest('static/view/'));
});
gulp.task('less',function(){
     gulp.src(['static/less/*.less'])
        .pipe( less() )
        .pipe(autoprefixer({
            browsers: ['last 20 versions','last 2 Explorer versions','last 3 Safari versions','Firefox >= 20'],
            cascade: true
        }))
        .pipe( cleanCss() )
        .pipe( gulp.dest('static/less/'));
});
gulp.task('watch',function(){
    gulp.watch('static/less/*.less',['less']);
    gulp.watch('static/view/*.html',['jst']);
});
gulp.task('localhost',function(){
    connect.server({
        root:'./static/',
        port:3302
    });
    
});
gulp.task('default',['localhost','watch']);