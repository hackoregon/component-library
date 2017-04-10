const path = require('path');
// const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
// Export a function. Accept the base config as the only param.

// custom config
// const customConfig = Object.assign({}, config, {});

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
//
// module.exports = (config) => {
//   // const modifiedConfig =  genDefaultConfig(config, env);
//   console.log(JSON.stringify(config));
//   const loaders = [{
//     test: /.css$/,
//     loaders: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]',
    // include: path.resolve(__dirname, '../src'),
//   }, {
//     test: /\.json$/,
//     loader: 'json-loader',
//     include: path.resolve(__dirname, '../src'),
//   }];
//   // console.log(modifiedConfig);
//   config.module.loaders.concat(loaders);
//   return config;
// };
