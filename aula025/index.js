// if, else if e else → continuação

const numero = 10;

if(numero >= 0 && numero <= 5){
    console.log('O número está entre 0 e 5.');
} else if(1 === 1){
    console.log('LITERAL'); // vai matar as próximas condições, mesmo que sejam verdadeiras
} else if(numero > 5 && numero <= 10) {
    console.log('O número não está entre 5 e 10.');
} else {
    console.log('O número não está entre 0 e 10.')
}
console.log('...Aqui vai o resto do código');
console.log('------------------------------------------');

if(numero >= 0 && numero <= 5){
    console.log('O número está entre 0 e 5.');
} 
if(1 === 1){
    console.log('LITERAL'); // vai matar as próximas condições, mesmo que sejam verdadeiras
}
if(numero > 5 && numero <= 10) {
    console.log('O número está entre 5 e 10.');
}
else {
    console.log('O número não está entre 0 e 10.')
}
console.log('...Aqui vai o resto do código');
console.log('------------------------------------------');
