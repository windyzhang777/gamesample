module.exports = {
  extends: ['../.eslintrc.js', 'react-app', 'prettier'],
  plugins: ['import'],
  settings: {
    'import/resolver': 'webpack',
  },
};
