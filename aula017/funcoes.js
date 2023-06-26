function saudacao(nome) {
    return(`Boa tarde, ${nome}!`);
}
const variavel = saudacao('Pilar');
console.log(variavel);

function soma(x, y){
    const result = x + y;
    return result;
}
console.log(soma(2, 2));

function soma(x = 0, y = 0){ //valor padrão caso o usuário não envie um ou mais parâmetros
    const result = x + y;
    return result;
}
console.log(soma());

const raizQuadrada = function(n){ // função anônima
    return n ** 0.5
}
console.log(raizQuadrada(9));

const raizCubica = (n) => { // arrow function 
    return n ** (1/3)         // quando têm uma linha e um parâmetro apenas: const raizCubica = (n) => n ** (1/3)
}
console.log(raizCubica(27));
