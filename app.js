'use strict';

const FCH = require('./src/file-changer.js');

let file = process.argv.slice(2).shift();

FCH.alterFile(file);
// console.log(`${file} content updated!`);
