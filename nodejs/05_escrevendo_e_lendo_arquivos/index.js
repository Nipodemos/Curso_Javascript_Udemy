
const path = require('path')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const pessoas = [
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'José' },
  { nome: 'Alan' }
];

const stringfy = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, stringfy)

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  return dados;
}

const dadosArquivo = lerArquivo(caminhoArquivo).then(dadosArquivo => console.log('dadosArquivo :>> ', JSON.parse(dadosArquivo)));

