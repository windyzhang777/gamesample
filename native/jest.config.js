global.window = global;
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node');
};

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!react-native|react-router-native)/'],
  setupFilesAfterEnv: ['jest-enzyme', '@react-native-mapbox-gl/maps/setup-jest'],
  testEnvironment: 'enzyme',
};
