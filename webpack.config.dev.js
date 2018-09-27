import path from "path";
import htmlWebpackPlugin from "html-webpack-plugin";

export default{
debug:true,
devtool:'inline-source-map',
noInfo:'false',
entry:[path.resolve(__dirname,'src/index')],
target: 'web',
output:{
  path: path.resolve(__dirname,'src'),
  publicPath: '/',
  filename: 'devbundle.js'

},
plugins:[
  //build html and inject scripts onto it
  new htmlWebpackPlugin({
    template:'src/index.html',
    inject:true

  })
],
module:{
  loaders:[
    {test:/\.js$/,exclude:/node_modules/,loaders:['babel']},
    {test:/\.css$/,loaders:['css']}
  ]
}
}
