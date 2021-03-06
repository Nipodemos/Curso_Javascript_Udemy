require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')
const mongoose = require('mongoose')
const app = express()

// Essa constante CONNECTIONSTRING veio do arquivo .env (ou dotenv) que é um arquivo pra salvar
// informações delicadas como a senha de acesso ao seu banco de dados
// se por um acaso vc consegui fazer a proeza de perder esse arquivo ou seu PC estragou denovo
// essa URL pode ser conseguida no site: https://cloud.mongodb.com/v2/5d4afd9ea6f2390ff6e3b4b9#clusters/connect?clusterId=Cluster0
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('conectei a database')
    app.emit('pronto')
  }).catch(error => { console.log('error :>> ', error) })
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Nosso próprios middlewares
app.use(meuMiddleware)
app.use(routes)

app.on('pronto', () => {
  const port = 3333
  app.listen(port, () => {
    console.log('Servidor executando, clique para abrir: http://localhost:' + port)
  })
})
