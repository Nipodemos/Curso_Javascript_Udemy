const express= require('express');

const app = express();

//           CRIAR     LER     ATUALIZAR     DELETAR
// CRUD ==>  CREATE    READ    UPDATE        DELETE
//           POST      GET     PUT           DELETE


// http://meusite.com/           GET   Entregue a página "/"
// http://meusite.com/sobre      GET   Entregue a página "/sobre"
// http://meusite.com/contato    GET   Entregue a página "/contato"


app.get('/', function(req,res){
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome"/>
  <button type="submit">Enviar</button>
  </form>
  
  `);
})

app.post('/', function(req,res) {
  res.send("recebi o formulário");
})

app.get('/contato', function(req,res){
  res.send("obrigado por entrar em contato");
})


const port = 3333;
app.listen(port, () => {
  console.log("Acessar site http://localhost:" + port);
  console.log("Servidor executando na porta " + port);
})