const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 引入 css-loader 和 style-loader 来处理css文件
  module: {
    rules: [
      {
        test: /\.css$/,
        // 这里的loader链式调用, 链会逆序执行
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
    ]
  }
};
