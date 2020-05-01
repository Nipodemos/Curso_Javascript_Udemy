const fs = require('fs').promises

module.exports = function(caminho, dados) {
  
  fs.writeFile(caminho, dados , {
    flag: 'w',
    encoding: 'utf8'
  });
}