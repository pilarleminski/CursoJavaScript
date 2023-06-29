const nome = 'Pilar';

function falaNome() {
    //const nome = 'Leminski';
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Leminski'; // não vai alterar a saída
    falaNome();
}
usaFalaNome();


