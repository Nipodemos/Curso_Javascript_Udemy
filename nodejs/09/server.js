const express = require('express')
const routes = require('./routes')

const app = express()
app.use(routes)
app.use(
  express.urlencoded({
    extended: true
  })
)

const port = 3333
app.listen(port, () => {
  console.log('Acessar site http://localhost:' + port)
  console.log('Servidor executando na porta ' + port)
})
