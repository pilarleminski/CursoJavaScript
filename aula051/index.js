// return -> retorna um valor e termina a função
function soma(a, b) {
    return a + b;
    
}
console.log(soma(5, 2));

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome};
}

const p1 = criaPessoa('Pilar', 'Veiga');
console.log(p1);

function falarFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falarFrase('Olá');
console.log(olaMundo('Mundo'));

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));