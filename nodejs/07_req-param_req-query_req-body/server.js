const express = require('express')

const app = express()
app.use(
  express.urlencoded({
    extended: true
  })
)
//           CRIAR     LER     ATUALIZAR     DELETAR
// CRUD ==>  CREATE    READ    UPDATE        DELETE
//           POST      GET     PUT           DELETE

// http://meusite.com/           GET   Entregue a página "/"
// http://meusite.com/sobre      GET   Entregue a página "/sobre"
// http://meusite.com/contato    GET   Entregue a página "/contato"

app.get('/', function (req, res) {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="qualquercoisa"/>
  <button type="submit">Enviar</button>
  </form>
  
  `)
})

app.get('/testes/:idUsuarios?/:outroParamentro?', function (req, res) {
  console.log('req.params :>> ', req.params)
  console.log('req.query :>> ', req.query)
  res.send(req.params)
})

app.post('/', function (req, res) {
  res.send(`o que vc me enviou foi ${req.body.qualquercoisa}`)
})

const port = 3333
app.listen(port, () => {
  console.log('Acessar site http://localhost:' + port)
  console.log('Servidor executando na porta ' + port)
})
