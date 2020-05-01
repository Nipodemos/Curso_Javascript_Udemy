const nome = 'alan';
const sobrenome = 'william';

const falanome = () => console.log(nome, sobrenome)

console.log(module);

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falanome = falanome;
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falanome = falanome;

console.log('module.exports :>> ', module.exports);

