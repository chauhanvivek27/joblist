const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    client: './src/client.js',
  },
  output: {
    path: path.resolve(__dirname, 'asset'),
    filename: "[name].js"
  },
  module: {
    rules: [
        { 
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
       },
       {
        test: /\.scss$/,
        use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
       }
    ]
 },
 plugins: [
  new MiniCssExtractPlugin({
    filename: 'main.css',
  })
]

}
