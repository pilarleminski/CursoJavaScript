const verdadeira = true;

// let tem escopo de bloco e de função
// var só tem escopo de função | tem hoisting

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando
console.log(nome, nome2);

if(verdadeira){
    let nome = 'Otávio'; // criando
    var nome2 = 'Rogério'; // redeclarando
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'Outra coisa'; // criando
        var nome2 = 'Ronaldo'; // redeclarando
        console.log(nome, nome2);
    }
}
console.log(nome, nome2);