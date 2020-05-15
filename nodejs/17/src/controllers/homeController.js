module.exports = {
  paginaInicial: (req, res) => {
    // req.flash('info', 'olá mundo')
    // req.flash('error', 'deu problemas')
    // req.flash('sucess', 'foi, deu certo')
    // console.log('req.flash("error") :>> ', req.flash('error'))
    req.session.usuario = {
      nome: 'Luiz',
      logado: true
    }
    res.render('index', {
      titulo: 'oi esse é o titulo',
      numeros: [
        1, 2, 3, 4, 5, 6, 7
      ]
    })
  },
  trataPost: (req, res) => {
    res.send('ouvi seu post')
  }

}
