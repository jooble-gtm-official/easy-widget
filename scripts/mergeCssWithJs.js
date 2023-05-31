const fs = require("fs");
const path = require("path");

const indexJs = "\"use strict\";Object.defineProperty(exports,\"__esModule\",{value:!0});var _component=require(\"./component\");Object.keys(_component).forEach(function(e){\"default\"!==e&&\"__esModule\"!==e&&(e in exports&&exports[e]===_component[e]||Object.defineProperty(exports,e,{enumerable:!0,get:function n(){return _component[e]}}))}),require(\"./index.css\");\n";

module.exports = (dist) => {
  fs.writeFileSync(path.resolve(dist, './index.js'), indexJs)
};
