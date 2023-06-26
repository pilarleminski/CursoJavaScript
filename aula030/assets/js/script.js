const h1 = document.querySelector('.container h1');
const data = new Date();

function getWeekDayText(weekDay) {
    let weekDayText;

    switch (weekDay) {
        case 0:
            weekDayText = 'Domingo';
            return weekDayText;
        case 1:
            weekDayText = 'Segunda-feira';
            return weekDayText;
        case 2:
            weekDayText = 'Terça-feira';
            return weekDayText;
        case 3:
            weekDayText = 'Quarta-feira';
            return weekDayText;
        case 4:
            weekDayText = 'Quinta-feira';
            return weekDayText;
        case 5:
            weekDayText = 'Sexta-feira';
            return weekDayText;
        case 6:
            weekDayText = 'Sábado';
            return weekDayText;
        default:
            weekDayText = '';
            return weekDayText;
    }
}
function getMonth(month) {
    let monthText;

    switch (month) {
        case 0:
            monthText = 'Janeiro';
            return monthText;
        case 1:
            monthText = 'Fevereiro';
            return weekDayText;
        case 2:
            monthText = 'Março';
            return monthText;
        case 3:
            monthText = 'Abril';
            return monthText;
        case 4:
            monthText = 'Maio';
            return monthText;
        case 5:
            monthText = 'Junho';
            return monthText;
        case 6:
            monthText = 'Julho';
            return monthText;
        case 7:
            monthText = 'Agosto';
            return monthText;
        case 8:
            monthText = 'Setembro';
            return monthText;
        case 9:
            monthText = 'Outubro';
            return monthText;
        case 10:
            monthText = 'Novembro';
            return monthText;
        case 11:
            monthText = 'Dezembro';
            return monthText;
        default:
            monthText = '';
            return monthText;
    }
}

function zeroAEsquerda(num) {
    return num >=10 ? num : `0${num}`;
}

function createDate(data) {
    const weekDay = data.getDay();
    const month = data.getMonth();
    const weekDayText = getWeekDayText(weekDay);
    const monthText = getMonth(month);

    return `${weekDayText}, ${data.getDate()} de ${monthText} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}


h1.innerHTML = createDate(data);