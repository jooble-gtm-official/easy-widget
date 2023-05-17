const fs = require('fs');
const path = require('path');
const beautify = require('json-beautify');

const projectDir = path.resolve(__dirname, '../');
const distDir = path.resolve(projectDir, './dist');

const packageJson = require('../package.json');

const newJson = {
  ...packageJson,
  main: './index.js',
  scripts: undefined,
  devDependencies: undefined,
  files: undefined,
};

fs.writeFileSync(path.resolve(distDir, './package.json'), beautify(newJson, null, 2, 1));

fs.copyFileSync(path.resolve(projectDir, './.npmrc'), path.resolve(distDir, './.npmrc'), fs.constants.COPYFILE_EXCL);
