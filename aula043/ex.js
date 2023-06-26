/*
Escreva uma função que recebe um número entre 0 e 100 e retorne o seguinte:
Número divisível por 3 = Fizz
Número divisível por 5 = Buzz
Numero é divisível por 3 e por 5 = FizzBuzz
Número não é divisível por 3 e/ou por 5 = Número
Checar se é realmente um número

*/

function div(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', div('a'));
for (let i = 0; i <= 100; i++){
    console.log(i, div(i));
}
console.log('------------------------------------------------');

