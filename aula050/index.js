function funcao() {
    console.log(arguments);
}
funcao('Valor', 1,2,3,4,5,6,7,8,9);

function funcao2() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao2(1,2,3,4,5,6,7,8,9);

function funcao3(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao3(2, undefined, 20);

function funcao4({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let pessoa = {
    nome: 'Pilar',
    sobrenome: 'Veiga',
    idade: 39
}

funcao4(pessoa);

function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
let array = ['Pilar Leminski Veiga', 'Programadora', 39]

funcao5(array);

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('-', 200, 20, 30, 40, 50);
