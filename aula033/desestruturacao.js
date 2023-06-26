// objetos

const pessoa = {
    nome: 'Pilar',
    sobrenome: 'Veiga',
    idade: 39,
    endereco: {
        rua: 'Alegre',
        numero: 818
    }
};

console.log(pessoa);
console.log('-----------------------------------------')

const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);

const { endereco: { rua }, endereco} = pessoa;
console.log(rua);

