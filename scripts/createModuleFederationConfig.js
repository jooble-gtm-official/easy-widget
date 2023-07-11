const fs = require("fs");
const path = require("path");
const moduleFederation = require("../moduleFederation.json");
const paths = require('../config/paths');
const sep = path.sep;
const beautify = require('json-beautify');

(() => {
    const rootDir = paths.componentsDir;
    const dirs = fs.readdirSync(rootDir);

    const _dirs = dirs
        .filter(dirName => fs.statSync(rootDir + sep + dirName).isFile() && dirName.endsWith('.js'))

    const exposes = _dirs.reduce((acc, fileName) => {
        const _fileName = fileName.replace('.js', '');

        const componentName = _fileName.split('-').map(a => a.charAt(0).toUpperCase() + a.substr(1)).join('');
       
        return {
            ...acc,
            [`./${componentName}`]: `./src/teleporthq/components/${_fileName}`
        }
    }, {})

    fs.writeFileSync(path.resolve(paths.rootDir, "./moduleFederation.json"), beautify({...moduleFederation, exposes}, null, 2, 1));
})();
