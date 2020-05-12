const express = require('express')
const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('src/middlewares/middleware.js')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Nosso próprios middlewares
app.use(meuMiddleware)
app.use(routes)

const port = 3333
app.listen(port, () => {
  console.log('Servidor executando, clique para abrir: http://localhost:' + port)
})
