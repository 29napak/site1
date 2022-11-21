 
const gulp = require("gulp")
const sass = require("gulp-sass")(require('sass'));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");

const browsersync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");
const imagemin = require('gulp-imagemin');
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const path = {
styles:{
    src:"src/assets/scss/**/**.scss",
    dest:"dist/assets/css"
},
index:{
    src:"src/**.html",
    dest:"dist/"
},
page:{
    src:"src/**/**.html",
    dest:"dist/"
},
img:{
    src:"src/assets/images/*",
    dest:"dist/assets/images"
},
js:{
    src:"src/assets/js/*",
    
    dest:"dist/assets/js"
}
}

function style(){
    return gulp
    .src(path.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([autoprefixer(),cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.styles.dest))
    .pipe(browsersync.stream())

}
function images(){
    return gulp
    .src(path.img.src)
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
	    imagemin.mozjpeg({quality: 75, progressive: true}),
	    imagemin.optipng({optimizationLevel: 5}),
    ]))
    .pipe(gulp.dest(path.img.dest))
    .pipe(browsersync.stream())
    
}
function script(){
    return gulp
    .src(path.js.src)
    .pipe(uglify())
    .pipe(rename({extname:'.min.js'}))
    .pipe(gulp.dest(path.js.dest))
    .pipe(browsersync.stream())
}
function index(){
    return gulp
    .src(path.index.src)
    .pipe(gulp.dest(path.index.dest))
    .pipe(browsersync.stream())
}
function page(){
    return gulp
    .src(path.page.src)
    .pipe(gulp.dest(path.page.dest))
    .pipe(browsersync.stream())
}


function browsersyncServer(cb){
    browsersync.init({
        server:{
            baseDir:'dist'
        }
    });
    gulp.watch('**/*.html').on("change",index)
    gulp.watch('**/*.html').on("change",browsersyncReload)
    gulp.watch('src/assets/scss/**/*.scss',style)
    gulp.watch('src/assets/js/*.js',script)
    cb();
}

function browsersyncReload(){
    browsersync.reload();    
}

exports.script=script
exports.images=images;
exports.index=index;
exports.page=page;
exports.style =style;
exports.browsersyncReload= browsersyncReload;
exports.browsersyncServer =browsersyncServer;

const build = gulp.parallel(index,page,style,images,script,browsersyncReload,browsersyncServer)

gulp.task("default",build)