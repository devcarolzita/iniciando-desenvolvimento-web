//Operador Maior
let idade =  20;
let idadeMinima = 18;
//Idade é maior que a idadeMinima ? Sim ou não?
let podeDirigir = idade > idadeMinima;
// console.log(podeDirigir);

//Operador menor
let precoItem = 50;
let orcamento = 100;
let dentroOrcamento = precoItem < orcamento;
// console.log('Posso comprar?', dentroOrcamento);

//Maior ou igual 
let renda = 5000;
let rendaMinima = 3000;
let elegivelParaEmprestimo = renda >= rendaMinima;
// console.log(elegivelParaEmprestimo);

//Menor ou igual a
let precoOriginal = 150;
let descontoAplicado = 20;
let precoFinal = precoOriginal - descontoAplicado;
let precoMaximoDesejado = 100;
let descontoSuficiente = precoFinal <= precoMaximoDesejado;
// console.log(descontoSuficiente);

//Igual a (===)
let codigoProduto = '123';
let codigoEsperado  = 123;
//Essa resposta dará false pois, o codigo do produto é texto e o código esperado é número.
let codigoCorreto = codigoProduto === codigoEsperado;
// console.log('O codigo está correto?', codigoCorreto);

//Diferente a
let senhaDigitada = 'sales';
let senhaArmazenada = 'salles';
let senhaIncorreta = senhaDigitada !== senhaArmazenada;
console.log('A senha digitada é diferente da senha armazenada?', senhaIncorreta);


