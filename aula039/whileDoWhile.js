let i = 0;

while (i <= 10){
    console.log(i);
    i++;
}
console.log('-----------------------------')

const nome = 'Pilar';
let n = 0;
while (n < nome.length){
    console.log(nome[n]);
    n++;
}
console.log('-----------------------------')

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);

while (rand !== 10) {
    rand = random(min,max);
    console.log(rand)
}
console.log('Saí do laço');
console.log('-----------------------------') 

let randi = 10;
do {
    console.log(rand)
} while (randi !== 10)
console.log('Saí do laço');
console.log('-----------------------------') 
