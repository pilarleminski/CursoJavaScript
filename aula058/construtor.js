// Sempre inicia com letra maiúscula

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {

    };
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ' : sou um método');
    }
}

const p1 = new Pessoa('Pilar', 'Leminski');
const p2 = new Pessoa('Caio', 'Festucci');

console.log(p1, p2);
p1.metodo();