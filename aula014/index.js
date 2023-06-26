let num1 = 10;
let num2 = 2.556487418574;
let temp = num1 * 'ola';

console.log(num1.toString() + num2);
console.log(num1.toString(2)); // representação binária
console.log(num2.toFixed(2));
console.log(Number.isInteger(num2));
console.log(Number.isNaN(temp));

// O JavaScript tem uma imprecisão nas contas

let n1 = 0.7;
let n2 = 0.1;
console.log(n1 + n2);

// Para resolver:

console.log((n1 + n2).toPrecision(2))
