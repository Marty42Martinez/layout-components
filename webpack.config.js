module.exports = {
  entry: './src/index.js',
  output: {
    // path: __dirname + '/docs',
    filename: '.bundle.[hash].js'
  },
  devServer: {
    port: 4242
  }
};
