function relogio() {
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;
    
    function iniciaRelogio() {
            timer = setInterval(() => {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const elemento = e.target;
    
        if(elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if(elemento.classList.contains('pausar')){
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
        if(elemento.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;
        }
    });
}
relogio();