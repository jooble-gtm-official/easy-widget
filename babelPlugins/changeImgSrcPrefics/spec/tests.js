const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const CISP = require('../src/index');

Enzyme.configure({ adapter: new Adapter() });

require('@babel/register')({
  presets: ['@babel/preset-react'],
  plugins: [CISP],
  cache: false,
});

require('./test/img.test');
require('./test/defaultProps.test');
