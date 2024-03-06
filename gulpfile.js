//Librerias

const { src, dest, watch, parallel} = require('gulp');
const sass = require ('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
//Librerias Img
const cache = require ('gulp-cache');
const webp = require ('gulp-webp');
const imagemin = require ('gulp-imagemin');
const avif = require ('gulp-avif');


//Funciones o Tareas

function css (done) {
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest('build/css'));
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

function dev(done) {
    watch('src/scss/**/*.scss', css)

    done();
}

//Mandar llamar las funciones

exports.css = css;
exports.versionWebp = versionWebp;
exports.imagenes = imagenes;
exports.versionAvif = versionAvif;
exports.dev =  parallel(versionWebp, imagenes, versionAvif, dev);

