var path = require('path')

module.exports = {

  // Where should webpack start building its internal dependency graph?
  entry: './src/main.js',

  // Where should webpack emit the bundles it creates?
  output: {
    // ./dist/build.js
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },

  // Loaders - how do we want to process particular types of files while being bundled?
  module: {

    rules: [

        {
          // Does the file end in .js?
          test: /\.js$/,
          // Apply babel to it
          loader: 'babel-loader',
          // Exclude node_modules (3rd party)
          exclude: /node_modules/
        },
        {
          // Does the file end in .vue?
          test: /\.vue$/,
          // Apply vue-loader to it
          loader: 'vue-loader'
        }

    ]

  },
  // Configure how modules are resolved
  resolve: {
    
    //configure an alias for 'Vue' to use /vue/dist/vue.esm.js
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },

    // Allow of us leave off extensions when importing for the following
    // * lets us still specify for ie: .css
    extensions: ['*', '.js', '.vue', '.json']

  }

}
