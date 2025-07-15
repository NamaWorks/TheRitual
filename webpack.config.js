const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Set mode: 'development' for dev or 'production' for optimized builds
  // mode: 'development',

  // Entry point for your frontend code
    entry: [
    './src/app/index.js',
    './src/styles/index.scss'
  ],

  // Output settings: bundled files go here
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'main.js',              // Output JS filename
    assetModuleFilename: 'assets/[hash][ext][query]', // Static assets location
    publicPath: '/',                       // Public URL of the output when referenced in a browser
  },

  module: {
    rules: [
      // Handle JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' // Optional if you're using Babel
      },

      // Handle SASS/SCSS files
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader',                // Resolves CSS imports
          'sass-loader'               // Compiles SCSS to CSS
        ]
      },

      // Handle Pug templates
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },

      // Handle images, fonts, etc.
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource' // Emits files as separate assets
      }
    ]
  },

  plugins: [
    // Clean the /dist folder before each build
    new CleanWebpackPlugin(),

    // Extract CSS into its own file
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
    // Generate a minimal HTML file for dev server
  //   new HtmlWebpackPlugin({
  //     templateContent: `
  //       <!DOCTYPE html>
  //       <html lang="en">
  //       <head>
  //         <meta charset="UTF-8">
  //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //         <title>Webpack Dev Server</title>
  //       </head>
  //       <body>
  //         <div id="app"></div>
  //       </body>
  //       </html>
  //     `,
  //     filename: 'index.html'
  //   })
  ],

  // Useful for debugging: links compiled code back to the source
  devtool: 'source-map',

  // Webpack Dev Server settings (for frontend development only)
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'dist'),
  //   },
  //   compress: true,
  //   port: 8080,
  //   open: true,
  //   hot: true,
  //   historyApiFallback: true // Allows client-side routing to work
  // },

  // Resolves these extensions automatically so you can omit them in imports
  resolve: {
    extensions: ['.js', '.scss', '.pug']
  }
};
