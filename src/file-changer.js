'use strict';

const fs = require('fs');
const util = require('util');
const emitter = require('./emitter.js');
const faker = require('faker');

const rf = util.promisify(fs.readFile);
const wf = util.promisify(fs.writeFile);

// read file
const readFile = async (file) => {
  return await rf(file);
};

//write file
const writeFile = async (file) => {
  let newLoremString = faker.lorem.sentence();
  return await wf(file, newLoremString);
};

//alter file 
const alterFile = async (file) => {
  try {
    await readFile(file);
    await writeFile(file);
  
    emitter.emit('file-saved', {status: 1, file: file, text: 'saved'});
  }
  catch (e) {
    emitter.emit('file-error', {status: 0, file: file, text: e.message});
  }
};

module.exports = { readFile, writeFile, alterFile };
