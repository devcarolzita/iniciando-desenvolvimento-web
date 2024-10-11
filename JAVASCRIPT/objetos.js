//Tenha uma loja de eletrônicos, preciso criar o iphone20392. 

const nomeProduto = 'Iphone 20392';
const precoProduto = 899;
const marcaProduto = 'Apple';


const nomeDoObjeto = {
    'chave': 'valor',
    'chave2': 'valor',
    'chave3': 'valor',
}
const produto = {
    nome: 'Iphone 20392',
    price: 899,
    marca: 'Apple'   
}
const alunos = {
    'ana': 6,
    'karoline': 10,
    'julia': 7,
    'pedro': 8
}
//Dot notation
//objeto.nomeDaChave
console.log(produto.nome);

//Bracket notation
//objeto[nomeDaChave]
let nomeDinamico = 'marca';
console.log(produto[nomeDinamico]);

const alunosArray = ['ana', 'pedro']
console.log(alunos[alunosArray[0]]);
