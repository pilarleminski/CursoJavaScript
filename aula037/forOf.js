// for of não pode ser usado em objetos pois não são iteráveis

const nome = 'Pilar Veiga';

for (let valor of nome){
    console.log(valor);
}
console.log('--------------------------------');

const nomes = ['Pilar', 'Leminski', 'Veiga'];

for (let valor of nomes){
    console.log(valor);
}
console.log('--------------------------------');