var webpack = require("webpack");
var openBrowser = require("open-browser-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: __dirname + "/src/app.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				use:"babel-loader"
			},
			{
				test:/\.css$/,
				use:[
					"style-loader",
					"css-loader"
				]
			},
			{
				test:/\.(png|jpg|gif|jpeg|svg)$/,
				use:"url-loader?limit=2048"
			},
			{
				test:/\.less$/,
				use:[
					"style-loader",
					"css-loader",
					"less-loader"
				]
			},
			{
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: 'url-loader'
      }
		]
	},
	plugins:[
    //Webpack内置的信息
    new webpack.BannerPlugin("Copyright by iwen  www.wwtliu.com"),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
    }),

    //压缩文件，并去掉所有警告
    new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),

    // 分离CSS和JS文件
		new ExtractTextPlugin('css/[name].[chunkhash:8].css'),

    // 提供公共代码
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'js/[name].[chunkhash:8].js'
		}),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    // 区分是开发环境还是打包环境
    new webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
		}),

    new openBrowser({
      url:"http://localhost:8080"
    }),
		new htmlWebpackPlugin({
			template:__dirname+"/index.tmpl.html"
		})
  ]
}
