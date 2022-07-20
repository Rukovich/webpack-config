const path = require('path');

module.exports = {

  entry: './src/index.js',

  output: {
    //Название файла в которое собирается прилоение
    filename: 'index.js', 
    //Путь к папке
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },



}