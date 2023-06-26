let umaString = 'Um texto qualquer';

console.log(umaString.indexOf('o'));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/)); // Aqui vai aparecer 'm' porque é [a-z]. Para aparecer o 'U' seria [A-Z]. Primeira letra maiúscula ou minúscula. Para uma letra específica, colocar a letra.
console.log(umaString.replace(/t/, '#'));
console.log(umaString.replace(/t/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(3, 8));
console.log(umaString.slice(-8));
console.log(umaString.split(' '));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());



