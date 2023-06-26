function formIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    function enviarForm(evento){
        evento.preventDefault();
        const inputPeso = evento.target.querySelector('.peso');
        const inputAltura = evento.target.querySelector('.altura');
        const peso = Number(inputPeso);
        const altura = Number(inputAltura);
        const result = peso / (altura * altura);
        console.log(result);
        console.log(peso);
        console.log(altura);

        if(result < 18.5){
            resultado.innerHTML = '<p>Você está ABAIXO do peso.</p>'
        } else if(result >= 18.5 && result <= 24.9){
            resultado.innerHTML = '<p>Você está no peso NORMAL.</p>'
        } else if(result >= 25 && result <= 29.9){
            resultado.innerHTML = '<p>Você está com SOBREPESO.</p>'
        } else if(result >= 30 && result <= 34.9){
            resultado.innerHTML = '<p>Você está com OBESIDADE GRAU 1.</p>'
        } else if(result >= 35 && result <= 39.9){
            resultado.innerHTML = '<p>Você está com OBESIDADE GRAU 2.</p>'
        } else if(result >= 40){
            resultado.innerHTML = '<p>Você está com OBESIDADE GRAU 3.</p>'
        } else{
            resultado.innerHTML = '<p>Algo deu errado. Verifique se digitou peso e altura corretamente.</p>'
        }
    }
    form.addEventListener('submit', enviarForm);

}
formIMC();

