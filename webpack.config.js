const { resolve } = require('path');

module.exports = ENV => {
  const ENTRY = './src/entry.js';
  const FILE_NAME = ENV.prod ? 'bundle.[name].[chunkhash]' : 'bundle.[name]';
  const DESTINATION = 'dist';
  const SHARED_SETTINGS = { FILE_NAME };
  const RULES = [require('./webpack/rules/javascript.js')(ENV)];
  const PLUGINS = [require('./webpack/plugins/manifest.js')(SHARED_SETTINGS)];

  const OUTPUT = {
    path: resolve(__dirname, DESTINATION),
    filename: `${FILE_NAME}.js`,
    chunkFilename: `${FILE_NAME}.js`,
    pathinfo: !ENV.prod,
    publicPath: `/${DESTINATION}/`,
  };

  const CONFIG = {
    mode: ENV.prod ? 'production' : 'development',
    context: resolve(__dirname),
    entry: ENTRY,
    output: OUTPUT,
    devtool: ENV.prod ? 'source-map' : 'eval',
    module: {
      rules: RULES,
    },
    plugins: PLUGINS,
  };

  return CONFIG;
};
