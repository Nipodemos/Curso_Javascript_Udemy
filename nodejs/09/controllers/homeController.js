module.exports = {
  paginaInicial: (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="qualquercoisa"/>
    <button type="submit">Enviar</button>
    </form>
    
    `)
  },
  trataPost: (req, res) => {
    res.send('ouvi seu post')
  }

}
