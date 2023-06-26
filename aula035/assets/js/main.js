const elementos = [
    {tag: 'p', texto: 'Lee "Apolo" Adama → CAG'},
    {tag: 'div', texto: 'Kara "Starbuck" Thrace'},
    {tag: 'footer', texto: 'Sharon "Boomer" Valerii'},
    {tag: 'section', texto: 'Karl "Helo" Agathon'}
];


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
