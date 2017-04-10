const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, '../src/assets')],
        loader: 'style-loader!css-loader?modules&importLoaders=0&localIdentName=[hash:base64:5]',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          emitFile: true,
        },
      },
    ],
  },
};
