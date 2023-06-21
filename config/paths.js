const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  componentsDir: resolveApp('src/teleporthq/components'),
  rootDir: resolveApp('./'),
  publicAssetsDir: resolveApp('public/playground_assets'),
  appDistClient: resolveApp('dist/client'),
};
