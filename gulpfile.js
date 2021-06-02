/*
 * Gulp Simple © 2020,
 * version: "1.0.0",
 * l: "ISC"
 * mansur.atm@gmail.com,
 */
'use strict';
//Places
const srcFolder = 'src'; //all source, libs etc.
const buildFolder = 'build'; //get from source and build.
//Paths
const path = {
    //src all paths
    srcPath: {
        html: srcFolder + '/*.html',
        htmlComponents: srcFolder + '/html/*.html',
        scss: srcFolder + '/scss/style.scss',
        cssLibs: srcFolder + '/scss/libs/*.css',
        scssComponents: srcFolder + '/scss/*.scss',
        js: srcFolder + '/js/*.js',
        jsLibs: srcFolder + '/js/libs/*.js',
        img: srcFolder + '/img/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,webp,WEBP}',
        imgMin: srcFolder + '/img/imgmin/',
        icons: srcFolder + '/img/icons/**/*.{svg,ico}',
        fonts: srcFolder + '/fonts/**/*',
        favicon: srcFolder + '/favicon/**/*'
    },
    //build all paths
    buildPath: {
        html: buildFolder + '/',
        css: buildFolder + '/css/',
        js: buildFolder + '/js/',
        img: buildFolder + '/img/',
        icons: buildFolder + '/img/icons/',
        fonts: buildFolder + '/fonts/',
        favicon: buildFolder + '/favicon/'
    }
};
//Add gulp and all plugins
const { src, dest, parallel, series, watch } = require('gulp'), // Gulp
    svgSprite = require('gulp-svg-sprite'); //svg sprites


// SPRITE SVG 
function spriteSvg() {
    return src(path.srcPath.icons)
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg",
                }
            }
        }))
        .pipe(dest([srcFolder + '/img/']))
}

//ALL EXPORTS
exports.spriteSvg = spriteSvg;
