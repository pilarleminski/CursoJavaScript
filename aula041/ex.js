// Escreva uma função que recebe 2 número e retorne o maior deles

const x = Math.floor(Math.random() * (1000 - 1) + 1);
const y = Math.floor(Math.random() * (1000 - 1) + 1);
calculaMaior(x, y);


function calculaMaior(x,y) {
    const maior = x > y ? `${x} > ${y}` : `${y} > ${x}`;
    console.log(maior);
}
console.log('------------------------------------')

const max = (x, y) => x > y ? x : y;
console.log(max(x, y));
console.log('------------------------------------')
