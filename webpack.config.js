module.exports = {
  target: 'web',
  entry: __dirname + '/app/main.jsx',
  output: {
    path: __dirname + '/dist/js/',
    filename: 'app.js',
    publicPath: '/assets/js/'
  },
  module: {
    loaders: [
      {test: /\.js/, loader: '6to5-loader'}
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['node_modules']
  }
};
