function retornaFuncao() {
    const nome = 'Pilar';
    return function () {
        return nome;
    };
}
function retornaFuncao2(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
const funcao2 = retornaFuncao2('Leminski')
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());
