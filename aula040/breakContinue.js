const numeros = [0,1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {
    if (numero === 2){
        console.log('Pulei o número 2')
        continue;
    }
    if (numero === 7){
        console.log('Parei aqui')
        break;
    }
    console.log(numero);
    
}
console.log('-------------------------------')

for (let i in numeros) {
    let numero = numeros[i];
    
    if (numero === 2){
        console.log('Pulei o número 2')
        continue;
    }
    if (numero === 7){
        console.log('Parei aqui')
        break;
    }
    console.log(numero);
    
}
console.log('-------------------------------')

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero === 2){
        console.log('Pulei o número 2')
        continue;
    }
    if (numero === 7){
        console.log('Parei aqui')
        break;
    }
    console.log(numero);
    
}
console.log('-------------------------------')

let n = 0;
while (n < numeros.length){
    let numero = numeros[n];

    if (numero === 2){
        console.log('Pulei o número 2')
        n++;
        continue;
    }
    if (numero === 7){
        console.log('Parei aqui')
        n++;
        break;
    }
    console.log(numero);
    n++;

}
console.log('-------------------------------')

let a = 0;
do {
    let numero = numeros[a];

    if (numero === 2){
        console.log('Pulei o número 2')
        a++;
        continue;
    }
    if (numero === 7){
        console.log('Parei aqui')
        a++;
        break;
    }
    console.log(numero);
    a++;

} while  (a < numeros.length)
console.log('-------------------------------')