var path = require("path");
process.env.NODE_ENV = process.env.NODE_ENV || "development";
module.exports = {
  entry: ["./app/app.js"],
  plugins: [],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    modules: [
      path.resolve("./app/components"),
      path.resolve("./node_modules"),
      path.resolve("./app/api/"),
      path.resolve("./app/styles/")
    ],
    extensions: [" ", ".js", "jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
  // devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
