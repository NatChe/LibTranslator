const config = {
    entry: ['./src/index.js'],
    output: {
      path: __dirname + '/dist',
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          loader:'babel-loader',
          test: /\.js$/,
          exclude:  /node_modules/,
          query: {
             presets: ['@babel/preset-env'] 
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    devServer:{
      port: 3000,
      contentBase: __dirname + '/demo',
      inline: true
    }
}
module.exports = config;