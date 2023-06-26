/*
function meuEscopo() {
    const form = document.querySelector('.form'); // seleciona pela classe
    form.onsubmit = function(evento){
        evento.preventDefault();
        alert('Formulário enviado')
    };
}
*/

//não atualizar a página quando clicar "Enviar"

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} → ${peso.value}Kg | ${altura.value}m</p>`

    }
    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();

