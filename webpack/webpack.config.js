const { merge } =require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = envVars => {
  const { env } = envVars;
  const evnConfig = require(`./webpack.${env}.js`);
  return merge(commonConfig, evnConfig);
}