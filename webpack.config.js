const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
let target = "web";

if(process.env.NODE_ENV === "production"){
  mode = "production";
  target = "browserslist";
}
module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test:/\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader","sass-loader"],
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
    static:{
        directory: path.resolve(__dirname,'dist')
    },
    port:3000,
    open:true,
    hot:true,
    compress:true,
    historyApiFallback: true,
},
plugins:[new MiniCssExtractPlugin()],
resolve : {
  extensions : [".js" , ".jsx"]
}
};
