const data = new Date('1984-06-12 00:00:00');
const diaSemanaNumero = data.getDay();

const diaSemanaTexto = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

switch (diaSemanaNumero) {
    case 0:
        console.log(diaSemanaTexto[0]);
        break;
    case 1:
        console.log(diaSemanaTexto[1]);
        break;
    case 2:
        console.log(diaSemanaTexto[2]);
        break;
    case 3:
        console.log(diaSemanaTexto[3]);
        break;
    case 4:
        console.log(diaSemanaTexto[4]);
        break;
    case 5:
        console.log(diaSemanaTexto[5]);
        break;
    case 6:
        console.log(diaSemanaTexto[6]);
        break;

    default:
        break;
}