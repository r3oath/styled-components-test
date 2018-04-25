module.exports = env => {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader?cacheDirectory',
        options: {
          presets: [
            ['@babel/preset-env', { modules: false }],
            '@babel/preset-react',
            '@babel/preset-flow',
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-object-rest-spread',
          ],
        },
      },
      {
        loader: 'eslint-loader',
      },
    ],
  };
};
