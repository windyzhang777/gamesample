/* webpack.config.js */

// const {createWebpackDevConfig} = require('@craco/craco');
//
// const cracoConfig = require('../craco.config.js');
// const webpackConfig = createWebpackDevConfig(cracoConfig);

const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-actions'],
  webpackFinal: async (config, {configType}) => {
    //TODO: Work with linting?
    // config.module.rules[2].include.push(
    //   path.resolve(__dirname, '../../shared')
    // );
    config.module.rules[3].oneOf[1].include.push(path.resolve(__dirname, '../../shared'));
    return config;
  },
};
