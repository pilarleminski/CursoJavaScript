const frutas = ['maçã', 'banana', 'uva', 'morango'];

for (let fruta in frutas) {
    console.log(frutas[fruta]);
}
console.log('-----------------------------------------')

const pessoa = {
    nome: 'Pilar',
    sobrenome: 'Veiga',
    idade: 39
}

for (let p in pessoa) {
    console.log(pessoa[p]);
}
console.log('-----------------------------------------')

console.log(pessoa.nome);
console.log(pessoa['nome']);

const chave = 'nome';
console.log(pessoa[chave]);
console.log('-----------------------------------------')

for (let p in pessoa) {
    console.log(p, pessoa[p]);
}
console.log('-----------------------------------------')
