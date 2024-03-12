//Librerias CSS
const { src, dest, watch, parallel} = require('gulp');
//CSS
const sass = require ('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require ('cssnano');
const postcss = require ('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

//Librerias Img
const cache = require ('gulp-cache');
const webp = require ('gulp-webp');
const imagemin = require ('gulp-imagemin');
const avif = require ('gulp-avif');


//Funciones o Tareas
//Funcion para librerias CSS
function css (done) {
    src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))        
        .pipe(dest('build/css'))
    done();
}
//Funcion para WebP
function versionWebp (done) {
    const opciones = {
        quality: 50
    };
    src ('src/img/**/*.{png,jpg}')
    .pipe ( webp ( opciones ) )
    .pipe ( dest ( 'build/img' ) )
    done();
}
//Funcion para imageMin
function imagenes (done) {
    const opciones = {
        optimizationLevel: 3
    };
    src ('src/img/**/*.{png,jpg}')
    .pipe ( cache ( imagemin ( opciones ) ) )
    .pipe ( dest ( 'build/img' ) )
    done();
}
//Funcion para Avif
function versionAvif (done) {
    const opciones = {
        quality: 50
    };
    src ('src/img/**/*.{png,jpg}')
    .pipe ( avif (opciones ) )
    .pipe ( dest ( 'build/img' ) )
    done();
}
//Funcion para JavaScript
function javaScript (done) {
    src ('src/js/*.js')

    .pipe ( dest ( 'build/js' ) )
    done();
}
//Funcion para el dev del gulpfile (mantener la compilación escuchando)
function dev(done) {
    watch('src/scss/**/*.scss', css)
    watch('src/js/*.js', javaScript)
    done();
}



//Mandar llamar las funciones
exports.css = css;
exports.versionWebp = versionWebp;
exports.imagenes = imagenes;
exports.versionAvif = versionAvif;
exports.javaScript = javaScript;
exports.dev =  parallel(css, versionWebp, imagenes, versionAvif, javaScript, dev);

