//импортируем объекты
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    //Название файла в которое собирается прилоение
    filename: 'index.js', 
    //Путь к папке
    path: path.resolve(__dirname, 'build'), //изначально было 'dist'
    path: path.output,
    clean: true
  },

  //Плагины
  plugins: [
    //плагин позволяет собирать HTML файл
    new HtmlWebpackPlugin({
      template: './src/index.html',
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
  },
}