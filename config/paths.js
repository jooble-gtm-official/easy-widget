const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appIndex: resolveApp('src/index.ts'),
  components: resolveApp('src/teleporthq/components/index.js'),
  componentsDir: resolveApp('src/teleporthq/components'),
  appSrc: resolveApp('src'),
  appDist: resolveApp('dist'),
  styles: resolveApp('src/styles'),
  fonts: resolveApp('src/static/fonts'),
  icons: resolveApp('src/static/icons'),
  appPackageJson: resolveApp('package.json'),
  appNodeModules: resolveApp('node_modules'),
  colors: resolveApp('src/styles/colors.scss'),
  typography: resolveApp('src/styles/typography.scss'),
  appAlias: {
    components: resolveApp('src/components/'),
    static: resolveApp('src/static/'),
    utils: resolveApp('src/utils/'),
    styles: resolveApp('src/styles/'),
    predicates: resolveApp('src/predicates/'),
    hooks: resolveApp('src/hooks/'),
  },
};
