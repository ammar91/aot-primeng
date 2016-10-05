var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');


module.exports = webpackMerge(commonConfig, {
  
  devtool:false,
  
  output: {
    path: helpers.root('dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('./app') // location of your src
    ),
    
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options:{
        htmlLoader: {
          minimize: false // workaround for ng2
        },
         resolve: {}
      },
     
    })

    //this plugin currently have an issue with es2015 module.

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: false
    // })
  ]
});
