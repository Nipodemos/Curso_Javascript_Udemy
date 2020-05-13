module.exports = {
  paginaInicial: (req, res) => {
    // req.flash('info', 'olá mundo')
    // req.flash('error', 'deu problemas')
    // req.flash('sucess', 'foi, deu certo')
    // console.log('req.flash("error") :>> ', req.flash('error'))
    req.session.usuario = { nome: 'Luiz', logado: true }
    res.render('index')
  },
  trataPost: (req, res) => {
    res.send('ouvi seu post')
  }

}
