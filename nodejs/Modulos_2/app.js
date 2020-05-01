const multiplicacao = require('./mod');
const classeCachorro = require('./mod1');

console.log('multiplicacao(2, 2) :>> ', multiplicacao(2, 2));
const cachorrinho = new classeCachorro('mike');
cachorrinho.latir();

console.log('__filename :>> ', __filename);
console.log('__dirname :>> ', __dirname);
