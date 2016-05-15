var _path = require('path');
var _webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var _fs = require('fs-extra');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractLESS = new ExtractTextPlugin('./css/main.less');

//目标目录
var dest = './.dest';

//删除已经存在的目标
(function(){
  var target = _path.join(__dirname, dest);
  if(_fs.existsSync(target)){
    _fs.removeSync(target);
  }
})();

var getVendors = function(){
  var result = [];
  var list = ['jquery', 'angular', 'moment', 'lodash', 'ui-router', 'socket.io'];
  list.map(function(current){
    result.push('./src/js/vendor/' + current);
  });
  return result;
}

var config = {
  entry: {
    app: './src/js/main.coffee',
    vendors: getVendors()
  },
  output: {
    filename: 'bundle.js',
    path: dest + '/js',
    publicPath: '/'
  },
  resolve: {
    root: [_path.resolve('./src/')],
    extensions:["", ".coffee", ".js"],
    alias: {
      moment: 'js/vendor/moment',
      jquery: 'js/vendor/jquery',
      simditor:'js/vendor/simditor',
      'simple-module': 'js/vendor/simditor-module',
      'simple-uploader': 'js/vendor/simditor-uploader',
      'marked': 'js/vendor/marked',
      'simple-hotkeys': 'js/vendor/simditor-hotkeys'
    }
  },
  plugins: [
    new _webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Simditor: 'simditor'
    }),
    new _webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
  ],
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee' },
      { test: /\.html?$/, loader: 'ng-cache' },
      //{ test: /[\/]simditor\.js$/, loader: "exports?Simditor" },
      { test: /[\/]angular\.js$/, loader: "exports?angular" },
      { test: /\.noty\.js$/, loader: "exports?noty" },
      { test: /highlight.highlight(.pack)?/, loader: "exports?hljs" },
      { test: /[\/]moment\.js$/, loader: "imports?moment" },
      { test: /fonts/i, loader: "file?name=../fonts/[name].[ext]"},
      { test: /png|jpeg|gif|jpg/i, loader: "file?name=../images/[name].[ext]"},
      //{ test: /template[\/].+html$/i, loader: "file?name=../[name].[ext]"},
      { test: /[\/]io.socket\.js$/, loader: "exports?io" },
      {test: /\.less$/i, loader: ExtractTextPlugin.extract(['css','less'])}
      //{ test: /\.less$/, loader: "style!css!less"}
    ]
  },

  devServer: {
    hot: true,
    //host: '',
    port: 8888,
    historyApiFallback: true,
    "proxy": {
      "/api/*": {
        "target": "http://127.0.0.1:8001"
      }
    }
  }
};

//复制文件
config.plugins.push(
  new CopyWebpackPlugin([
    {from: './src/images', to: '../images'},
    //{from: './webpack.config.js', to: './'},
    {from: './src/template', to: '../'},
    {from: './src/package', to: '../package'}
  ])
);

config.plugins.push(
  new ExtractTextPlugin('../css/main.css')
);

//产品环境下配置不同
if(process.env.NODE_ENV === 'production'){
  //需要压缩
  config.plugins.push(
    new _webpack.optimize.UglifyJsPlugin({minimize: true})
  );

  //产品环境的pubicPath必需设置为/js/，否则会导致bundle.js引出不对
  config.output.publicPath = '/js/';
}

module.exports = config;