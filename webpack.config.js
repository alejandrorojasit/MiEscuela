const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
   devServer: {
      open: true,
      port: 3001,
      proxy:{
         '*': 'http://[::1]:3000/',
         "secure": false,
         "changeOrigin":true,
      }
   },
   entry:['react-hot-loader/patch','./app/index'],
   output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
   },
   module:{
      rules:[
         {
            test: /\.(js|jsx)$/,
            loader:'babel-loader',
            exclude: /node_modules/
         },  
         {
            test: /\.css$/,
            use: ['style-loader','css-loader']
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
         },
{
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
      ],
   },
   resolve: {
      alias: {
         process: 'process/browser',
         stream: "stream-browserify",
         zlib: "browserify-zlib"
      }
   },
   plugins: [
      new webpack.ProvidePlugin({
         process: 'process/browser',
         Buffer: ['buffer', 'Buffer'],
      }),
      new HtmlWebpackPlugin({template: './app/index.html'})
   ]
}

