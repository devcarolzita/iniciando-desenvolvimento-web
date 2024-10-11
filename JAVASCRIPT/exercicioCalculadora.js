//Crie uma calculadora com soma, divisão e multipliação.

//1.Como eu crio uma calculadora ?
//2.Como eu crio a função de soma ?
//3. Como eu crio a função de subtração? 
//4.Como eu crio a função de multiplicação? 
//5.Como eu agrupo essa funções para a função calculadora

// function nomeDaFuncao(parametro1){
//     return 'retorna algo'
// }

function soma(numero1, numero2){
    let resultado = numero1 + numero2;
    return resultado;
} 

function multi(numero1, numero2){
    let resultado = numero1 * numero2;
    return resultado;
}

function sub(numero1, numero2){
    let resultado = numero1 - numero2;
    return resultado;
}
function div(numero1, numero2){
    let resultado = numero1 / numero2;
    return resultado;
}
function calculadora(operador, numero1, numero2){
    console.log('operador', operador);
    console.log('numero1', numero1);
    console.log('numero2', numero2);
    switch(operador){
        case '+':
            return soma(numero1, numero2);
        case '-':
            return sub(numero1, numero2);
        case '*':
            return multi(numero1, numero2);
        case '/':
            return div(numero1, numero2);
    }
}
console.log(calculadora('*', 10, 2));


