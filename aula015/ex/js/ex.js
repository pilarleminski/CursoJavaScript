const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>[RAÍZ QUADRADA] → ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>[INTEIRO] → ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>[NaN] → ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>[ROUND FLOOR] → ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>[ROUND CEIL] → ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>[2 CASAS DECIMAIS] → ${numero.toFixed(2)}</p>`;