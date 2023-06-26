const nome = 'Pilar Leminski';
const sobrenome = 'Veiga';
const anoNascimento = 1984;
const pesoEmKg = 76;
const alturaEmM = 1.64;
let imc;
let idade;

imc = pesoEmKg / (alturaEmM * alturaEmM);
idade = 2023 - anoNascimento;

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade, pesa ${pesoEmKg}Kg, tem ${alturaEmM}m de altura e seu IMC é: ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
