const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, ..., elemn);

const removidos = nomes.splice(-2, 1);
console.log(nomes, removidos);


nomes.splice(-2, 0, 'Pilar');
console.log(nomes);
