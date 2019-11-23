'use strict';

const emitter = require('./emitter.js');

const handleError = (event) => {
  console.log(`ERROR: Changing file ${event.file} failed with error ${event.text}`);
};

const handleSuccess = (event) => {
  console.log(`SUCCESS: Changing file ${event.file} succeeded`);
};

emitter.on('file-error', handleError);
emitter.on('file-saved', handleSuccess);