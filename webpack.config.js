//импортируем объекты
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin'); //scss

module.exports = {
  // target: 'web',
  entry: './src/index.js',
  mode: 'development',  //Какой мод используется для локального сервера

  output: {
    filename: 'index.js', //Название файла в которое собирается прилоение
    path: path.resolve(__dirname, 'build'),//Путь к папке
    clean: true,
  },

  //Плагины
  plugins: [
    new HtmlWebpackPlugin({ //плагин позволяет собирать HTML файл
      template: './src/index.html',
    }),
    //
    new miniCss({
      filename: '../style.css',
    }),
  ],

  //Модули
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,  //К каким элементам мы принимаем какое-либо правило
        use: ['style-loader', // Creates `style` nodes from JS strings
          'css-loader', //Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS

          {
            loader: 'sass-resources-loader',
            options: {
              // Provide path to the file with resources
              resources: ['./src/vars.scss']
            },
          }
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
    ],
  },
  devServer: {
    static: './build',
    historyApiFallback: true,
    watchFiles: './src/index.html'  //Отслеживает файлы, без параметра не работает обновление HTML
  },
}