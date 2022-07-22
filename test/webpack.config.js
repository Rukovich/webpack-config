//импортируем объекты
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // target: 'web',
  entry: './src/index.js',

  output: {
    //Название файла в которое собирается прилоение
    filename: 'index.js',
    //Путь к папке
    path: path.resolve(__dirname, 'build'), //изначально было 'dist'
    clean: true,
    // path: path.output,
    // watchContentBase: true,
  },

  //Плагины
  plugins: [
    //плагин позволяет собирать HTML файл
    new HtmlWebpackPlugin({
      template: './src/index.html',

      // inject: true,
      // filename: 'index.html'
    }),
  ],

  //Модули
  module: {
    rules: [
      {
        //К каким элементам мы принимаем какое-либо правило
        test: /\.css$/i,
        //Правило которое мы применяем к элементам
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  //Какой мод используется для локального сервера
  mode: 'development',

  devServer: {
    static: './build',
    historyApiFallback: true,

    //Отслеживает файлы, без параметра не работает обновление HTML
    watchFiles: './src/index.html'
  },
}