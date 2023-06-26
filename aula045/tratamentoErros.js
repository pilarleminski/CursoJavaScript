try {
    // Executado quando NÃO há erro
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro'); // não executaria o catch
    console.log('Fechei o arquivo arquivo');
} catch (error) {
    // Executado quando HÁ erro
    console.log('Tratando o erro');
} finally {
    // Executado SEMPRE
    console.log('FINALLY: Eu sempre sou executado');
}
console.log('==============================================');

function retornaHora(data) {
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', { hour12: false});

}

try {
    const data = new Date('01-01-1970 15:15:15')
    const hora = retornaHora(11); // entrada dos dados
    console.log(hora);
} catch (error) {
    console.log('Tratar erro');
} finally {
    console.log('Have a nice day! =)');
}