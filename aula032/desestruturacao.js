let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const array = ['B', 'C', 'A'];
[a, b, c] = array;

console.log(array);
console.log('-----------------------------------------')

const numeros = [1,2,3,4,5,6,7,8,9];
const primeiroNumeros = numeros[0]; // teria que criar uma para cada
console.log(primeiroNumeros);
console.log('-----------------------------------------')
// ... rest, ... spread
const [um, dois, ...resto] = numeros;
console.log(um, dois);
console.log(resto);
console.log('-----------------------------------------')

const [primeiro, , terceiro, , quinto] = numeros;
console.log(primeiro, terceiro, quinto);
console.log('-----------------------------------------')

const array2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const [lista1, lista2, lista3] = array2;
console.log(lista2[2]);
