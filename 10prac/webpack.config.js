// webpack.config.js
// `webpack` command will pick up this config setup by default
// var path = require('path'); // node에서 실행될 내용이라 있는것. 따라서 빼주자

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'app.js', // app.js가 만들어질 것
    // path: path.resolve(__dirname, 'dist')
    path: `${__dirname}/dist`, // dist라는 폴더로 떨어질 것. 결과가.
  }
};
