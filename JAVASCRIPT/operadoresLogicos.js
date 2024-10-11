//E (&&)
//Retorna verdadeiro se ambas as condições forem verdadeiras. Suponha que você só pode aprovar uma despesa se ela estiver dentro do orçamento e se for aprovada pelo gerente. Ambas as condições devem ser verdadeiras. Salvar essa verificação em uma variável ajuda a simplificar a lógica de aprovação.

let dentroDoOrcamento = true;
let aprovadoPeloGerente = true;

let despesaAprovada = dentroDoOrcamento && aprovadoPeloGerente;
// console.log(despesaAprovada);

//OU(||) 
//Retorna verdadeiro se pelo menos uma das condições for verdadeira. Imagine que um funcionário pode receber um bônus se alcançar a meta de vendas ou se tiver uma excelente avaliação de desempenho. Basta uma das condições ser verdadeira para que o bônus seja concedido.

let atingiuMeta = true;
let excelenteAvaliacao = false;
let recebeBonus = atingiuMeta || excelenteAvaliacao;
// console.log('Recebe bonus ?', recebeBonus);

//Não (!)
// Suponha que você só permite acesso a um relatório se não for um dia de feriado. O operador ! ajuda a verificar essa condição. Salvar essa informação em uma variável pode ser útil para condicionar o acesso.

let feriado = true;
let podeAcessarRelatorio = !feriado;
// console.log(podeAcessarRelatorio);

let luzAcesa = true;
let alexaDesligarALuz = !luzAcesa;
console.log('A luz está ligada?', alexaDesligarALuz);
console.log('O que tem na variavel alexadelsigaluz', alexaDesligarALuz);

let alexaAcendeALuz = !alexaDesligarALuz;
console.log('o que tem na variavel alexadesligar', alexaDesligarALuz);

console.log('A luz está ligada?', alexaAcendeALuz);



