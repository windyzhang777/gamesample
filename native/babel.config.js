const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          shared: path.resolve(__dirname, '../shared'),
        },
      },
    ],
  ],
};
