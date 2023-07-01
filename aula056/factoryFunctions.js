function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor){
           valor = valor.split(' ');
           this.nome = valor.shift();
           this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}`; // this se refere a quem chamou o método
        },
        altura,
        peso,
        // Getter
        get imc(){ // get faz a função se comportar como atributo
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Pilar', 'Veiga', 1.64, 75);
console.log(p1.fala('JS'));
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Caio Festucci'
console.log(p1.nomeCompleto);

