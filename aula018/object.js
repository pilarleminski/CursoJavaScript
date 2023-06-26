const pessoa1 = {
    nome: 'Pilar',
    sobrenome: 'Veiga',
    idade: 38
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa1);
console.log('------------------------------');

function criaPessoa(nome,sobrenome,idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa01 = criaPessoa('Cristina', 'Leminski', 59);
const pessoa02 = criaPessoa('Luiz', 'Veiga', 67);
const pessoa03 = criaPessoa('Ana', 'Veiga', 35);
const pessoa04 = criaPessoa('Caio', 'Festucci', 34);
const pessoa05 = criaPessoa('Débora', 'Oliveira', 39);

console.log(pessoa01,pessoa02,pessoa03,pessoa04,pessoa05);
console.log('------------------------------');
console.log(pessoa01);
console.log(pessoa02);
console.log(pessoa03);
console.log(pessoa04);
console.log(pessoa05);
console.log('------------------------------');

const pessoa06 = {
    nome: 'Pilar',
    sobrenome: 'Veiga',
    idade: 38,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};
console.log(pessoa06);
pessoa06.fala();
pessoa06.incrementaIdade();
pessoa06.fala();
pessoa06.incrementaIdade();
pessoa06.fala();
pessoa06.incrementaIdade();
pessoa06.fala();
pessoa06.incrementaIdade();
console.log('------------------------------');
