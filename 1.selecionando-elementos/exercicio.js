// 1. A partir do HTML, exiba cada texto no console do javascript:
console.log('teste de conexão')

//Selecionei o elemento
const titulo = document.getElementById('titulo');

//Alterar o seu estilo
titulo.style.color = 'red';

//Selecionar o elemento
//`document.querySelector('.classe')`.
const paragrafo = document.querySelector('.descricao');

//Alterar o estilo dele
//elemento.style.proprieDadeQuequerAlterar = 'valor da propriedade'
paragrafo.style.fontSize = '4rem';

//Pegando a segunda descrição
//Selecionar o elemento
//`document.querySelector('.classe')`.
const listDePs = document.querySelectorAll('.descricao');
const segundoP = listDePs[1];
console.log(segundoP)

//Alterar o estilo
segundoP.style.color = 'red';
segundoP.style.fontSize = '3.5rem';

//

