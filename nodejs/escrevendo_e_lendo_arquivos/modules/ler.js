const fs = require('fs').promises;


module.exports = function(caminho) {
  return fs.readFile(caminho, 'utf8');
}