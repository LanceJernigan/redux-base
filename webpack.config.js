const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const CLIENT_PATH = path.resolve(__dirname,'client','index.js')

const BUILD_PATH = path.resolve(__dirname,'public')

const BUNDLE_FILE_NAME = 'assets/js/[name].[hash].js'

const ISPRODUCTION = process.env.NODE_ENV === 'production' || process.env.ISLIVE

const APP_ENTRY = ISPRODUCTION ? ['babel-polyfill',CLIENT_PATH] : [
  'babel-polyfill',
  'webpack-dev-server/client?http://localhost:8080',
  CLIENT_PATH
]

const CSS_LOADER = ISPRODUCTION ? {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader!postcss-loader'
  })
} : {
  test: /\.css$/,
  use: ['style-loader','css-loader','postcss-loader']
}

const PLUGINS = [new HTMLPlugin({template: path.resolve(__dirname,'index.template.html')})].concat(
  ISPRODUCTION ? [
    new ExtractTextPlugin({
      filename: 'assets/css/[name].[hash].css'
    })
  ] : []
)


module.exports = {
  entry: {
    app: APP_ENTRY,
    vendor: ['react','react-dom','react-router', 'redux','react-redux']
  },
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: BUNDLE_FILE_NAME
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      CSS_LOADER
    ]
  },
  plugins: PLUGINS,
  devServer: {
    contentBase: BUILD_PATH,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false
      }
    }
  }
}