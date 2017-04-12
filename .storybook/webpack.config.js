/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const className = isProd ? '[hash:base64:5]' : '[name]__[local]-[hash:base64:5]';

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules'), /assets\/.*\.css$/],
        loader: `style-loader!css-loader?modules&importLoaders=1&localIdentName=${className}!postcss-loader`,
      },
      {
        test: /assets\/.*\.css$/,
        // exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, '../src/assets')],
        loader: 'style-loader!css-loader!postcss-loader',
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
  postcss: () => [
    require('autoprefixer'),
  ],
};
