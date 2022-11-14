/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const {getDefaultConfig} = require('metro-config');

const extraNodeModules = {
  shared: path.resolve(__dirname, '../shared'),
};

const watchFolders = [
  path.resolve(__dirname, '.'),
  path.resolve(__dirname, '../shared'),
  path.resolve(__dirname, '../node_modules'),
];

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      extraNodeModules,
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    watchFolders,
  };
})();
