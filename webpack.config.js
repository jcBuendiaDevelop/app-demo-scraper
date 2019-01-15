const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractCss = new ExtractTextPlugin({
    filename: "../css/[name].bundle.css",
});


module.exports = {
  entry: {
    app: "./src/app.tsx"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".sass", ".scss"]
  },
    plugins: [
        // new CleanWebpackPlugin(['build/js', 'build/css', 'build/index.html']),
        new HtmlWebpackPlugin({
            hash: true,
            title: "Empeño Facil",
            template: './src/layouts/template.html',
            filename: '../index.html' //relative to root of the application
        }),
        extractCss
   ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              sourceMap: true,
            }
          },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/
      }, {
        test: /\.s[ca]+ss$/,  
        use: extractCss.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                }
              }, {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                }
              },
              {
                loader: 'resolve-url-loader',
                options: {
                  sourceMap: true,
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  sourceMapContents: false
                }
              }
            ],
            publicPath: '/build/css'
        })
      }, {
        test: /\.css$/,
        use: extractCss.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              }, {
                loader: "postcss-loader",
                options: {
                  sourceMap: true
                }
              }, {
                loader: "resolve-url-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
        })
      }, {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      }
    ]
  }
}

