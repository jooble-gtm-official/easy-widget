const fs = require('fs');
const path = require("path");

module.exports = componentsDir => {
  const sep = path.sep;
  const files = fs.readdirSync(componentsDir);

  const entryObject = {};

  const convertToEntryKey = fileName => {
    if (fileName.includes('index')) {
      return fileName;
    }
    const [name, ext] = fileName.split('.');
    return name.split('-').map(a => a.charAt(0).toUpperCase() + a.substr(1)).join('').concat(`.${ext}`);
  }

  files
    .filter(dirName => fs.statSync(componentsDir + sep + dirName).isFile() && dirName.endsWith('.js'))
    .forEach(fileName => entryObject[convertToEntryKey(fileName)] = componentsDir + sep + fileName)

  return entryObject;
}