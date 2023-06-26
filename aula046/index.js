function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');
}

// setInterval(function () {
//     console.log(mostrarHora());
// }, 1000);



const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 5000);

