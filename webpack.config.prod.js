import path from "path";
import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";
import webpackmd5hash from "webpack-md5-hash";
import extracttextplugin from "extract-text-webpack-plugin";

export default{
debug:true,
devtool:'source-map',
noInfo:'false',
entry:{
  main:  path.resolve(__dirname,'src/index'),
  vendor: path.resolve(__dirname,'src/vendor')
},
target: 'web',
output:{
  path: path.resolve(__dirname,'dist'),
  publicPath: '/',
  filename: '[name].[chunkhash].js'

},
plugins:[
  //generate separate file for css files using extractextplugin
  new extracttextplugin('[name].[contenthash].css'),
  //for cache busting use md5 hash plugin.File name changes when there is actually a change in file
  new webpackmd5hash(),
  //common chunks plugin to separate bundle
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor"
  }),

  //html webpack plugin
  new htmlWebpackPlugin({
    template:'src/index.html',
    minify:{
      removeComments:true,
      removeRedundantAttributes:true,
      removeStyleLinkTypeAttributes:true,
      removeTagWhitespace:true,
      collapseWhitespace:true,
      useShortDoctype:true,
      keepClosingSlash:true,
      minifyJS:true,
      minifyCSS:true,
      minifyURLs:true
    },
    inject:true
  }),
  //Eliminate Duplicate Plugins
  new webpack.optimize.DedupePlugin(),
  //minify JS
  new webpack.optimize.UglifyJsPlugin()

],
module:{
  loaders:[
    {test:/\.js$/,exclude:/node_modules/,loaders:['babel']},
    {test:/\.css$/,loader:extracttextplugin.extract('css?sourceMap')}
  ]
}
}
