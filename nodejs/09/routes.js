const express = require('express')
const routes = express.Router()
const homeController = require('./controllers/homeController')

// rotas da home
routes.get('/', homeController.paginaInicial)
routes.post('/', homeController.trataPost)

module.exports = routes

//           CRIAR     LER     ATUALIZAR     DELETAR
// CRUD ==>  CREATE    READ    UPDATE        DELETE
//           POST      GET     PUT           DELETE

// http://meusite.com/           GET   Entregue a página "/"
// http://meusite.com/sobre      GET   Entregue a página "/sobre"
// http://meusite.com/contato    GET   Entregue a página "/contato"
