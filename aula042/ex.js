// Escreva uma função chamada ePaisagem que recebe 2 argumentos, largura e altura, de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

const a = Math.floor(Math.random() * (5000 - 1) + 1);
console.log(`[Altura] → ${a}`)
const l = Math.floor(Math.random() * (5000 - 1) + 1);
console.log(`[Largura] → ${l}`)

const ePaisagem = (a, l) => l > a;
console.log(ePaisagem(a,l));