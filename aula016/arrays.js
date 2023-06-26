const array = ['João', 'Maria', 'Luiz', 1, true, null]; // Aceita tipos diferentes, mas não é uma boa prática de programação
const alunos = ['João', 'Maria', 'Luiz'];

console.log(alunos);
console.log(alunos[1]);

alunos[0] = 'Eduardo'; // Altera
alunos[3] = 'Mônica'; // Adiciona
alunos[alunos.length] = 'Karolina'; // Adiciona no fim
alunos.push('Pedro'); // Adiciona no fim
alunos.unshift('Ana'); // Adiciona no começo
console.log(alunos);

const removido = alunos.pop() // Remove do fim
console.log(alunos);
console.log(removido);

const removido2 = alunos.shift() // Remove do começo
console.log(alunos);
console.log(removido2);

delete alunos[1]; // Remove deixando o índice vazio
console.log(alunos);

console.log(alunos.slice(0, 3));

console.log(alunos instanceof Array); // Se o usar typeOf vaai aparecer object, pois array é um objeto.





