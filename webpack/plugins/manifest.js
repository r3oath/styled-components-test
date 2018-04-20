const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = _ => {
  return new ManifestPlugin();
};
