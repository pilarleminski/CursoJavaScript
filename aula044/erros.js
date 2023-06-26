try {
    console.log(naoExisto);
} catch(err) {
    console.log('Variável não existe.')
    console.log(err);
}
console.log('=====================================');

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números');
    }
    return x + y;
}

try {
    console.log(soma('a', 4));
} catch(error){
    console.log(error);
}
console.log('=====================================');

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('x e y precisam ser números');
    }
    return x + y;
}

try {
    console.log(soma('a', 4));
} catch(error){
    console.log('Alguma coisa mais amigável');
}
console.log('=====================================');