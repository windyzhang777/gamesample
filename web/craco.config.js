const path = require('path');

module.exports = function ({env}) {
  return {
    webpack: {
      alias: {
        shared: path.resolve(__dirname, '../shared'),
      },
      configure: (config) => {
        config.resolve.plugins = config.resolve.plugins.filter((plugin) => {
          return !(plugin.constructor.name === 'ModuleScopePlugin');
        });
        config.resolve.modules.push(
          path.resolve(__dirname, '../shared/node_modules'),
          path.resolve(__dirname, '../node_modules'),
        );
        config.module.rules[1]['include'] = [
          //TS Resolver is at a fixed index
          path.resolve(__dirname),
          path.resolve(__dirname, '../shared'),
        ];
        config.module.rules[2].oneOf[0]['include'] = [
          //TS Resolver is at a fixed index
          path.resolve(__dirname),
          path.resolve(__dirname, '../shared'),
        ];
        config.module.rules[2].oneOf[1]['include'] = [
          //TS Resolver is at a fixed index
          path.resolve(__dirname),
          path.resolve(__dirname, '../shared'),
        ];
        config.module.rules[2].oneOf[2]['include'] = [
          //TS Resolver is at a fixed index
          path.resolve(__dirname),
          path.resolve(__dirname, '../shared'),
        ];
        return config;
      },
    },
  };
};
