// Valor por referência

const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes;
const novo1 = [...novo];

novo.pop();
console.log(nomes);
console.log(novo1);

// Transformando String em Array

const nome = 'Pilar Leminski Veiga';
const nomeSobrenome = nome.split(' ');
console.log(nomeSobrenome);

// Transformando Array em String

const nomes2 = [ 'Pilar', 'Leminski', 'Veiga' ];
const nome2 = nomes2.join(' ');
console.log(nome2);
