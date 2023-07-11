const moduleFederationConfig = require('../moduleFederation.json');
const FederationStatsPlugin = require('webpack-federation-stats-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');

module.exports = {
  client: [
    new FederationStatsPlugin(),
    new ModuleFederationPlugin({
      ...moduleFederationConfig,
      remotes: {},
    }),
  ],
  server: [
    new NodeFederationPlugin({
      ...moduleFederationConfig,
      library: { type: 'commonjs-module' },
      remotes: {},
    }),
    new StreamingTargetPlugin({
      name: moduleFederationConfig.name,
      library: { type: 'commonjs-module' },
      remotes: {},
    }),
  ],
};
