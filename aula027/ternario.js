// (condição) ? 'valor para V' : 'valor para F'
const pontuacaoUsuario = 999;

if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
