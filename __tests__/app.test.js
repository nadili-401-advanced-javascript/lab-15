'use strict';

jest.mock('fs');

require('../src/logger');
const fileChanger = require('../src/file-changer');

describe('File Changer', () => {

  it('thows error if given bad file', () => {
    try {
      fileChanger.readFile('bad.txt');
    } catch (error) {
      expect(error).toBe('Invalid file');
    }
  });

});