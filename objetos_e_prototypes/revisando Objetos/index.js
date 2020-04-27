const pessoa = {
    nome: 'Alan',
    sobrenome: 'Luiz'
};

//> é possível pegar o valor de um objeto de duas formas

// usando o ponto
console.log(pessoa.nome, pessoa.sobrenome);
// ou usando colchetes
console.log(pessoa[nome], pessoa[sobrenome]);


//> usar colchetes é útil quando vc quer que a chave seja dinânica

const chave = 'sobrenome';
console.log(pessoa[chave]);


//> é possível criar um objeto usando o construtor dela, igual se faz com classes

const pessoa1 = new Object();

pessoa1.nome = 'Carlos';
pessoa1.sobrenome = 'Alberto';


//> é melhor usar um syntax sugar pra facilitar a criação de
// objetos.

//Uma opção é usar o Factory functions
function criaPessoa(nome,sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

//Outra opção é os constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);
