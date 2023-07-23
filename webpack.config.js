const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}
module.exports = {
  mode: mode,
  target: target,

  output: {
    assetModuleFilename: "images/[hash][ext][query]"
  },
  module: {

    rules: [
      {
        test: /\.(png|jpe?g|gif|avif|svg)$/i,
        type: "asset/resource",
      },
      {
        // test:/\.s?css$/i,
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }
          },
          "css-loader", "postcss-loader", "sass-loader"
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: false,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
