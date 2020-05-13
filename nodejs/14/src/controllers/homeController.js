const HomeModel = require('../models/HomeModel')

HomeModel.create({ titulo: 'Um titulo de teste', descricao: 'uma descrição de teste' })
  .then(dados => { console.log('dados :>> ', dados) })
  .catch((error) => console.log('error >> ', error))

module.exports = {
  paginaInicial: (req, res) => {
    res.render('index')
  },
  trataPost: (req, res) => {
    res.send('ouvi seu post')
  }

}
