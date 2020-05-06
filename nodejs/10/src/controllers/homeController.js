module.exports = {
  paginaInicial: (req, res) => {
    res.render('index')
  },
  trataPost: (req, res) => {
    res.send('ouvi seu post')
  }

}
