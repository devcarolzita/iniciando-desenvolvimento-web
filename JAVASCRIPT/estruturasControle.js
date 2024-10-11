// if(condicao){
//     //Acontece algo aqui
// }

// let idade = 16;
// if(idade >= 18){
//     console.log('Pode dirigir!'); 
// }else {
//     console.log('Não pode dirigir!!!!!');
// }

//Else If ( Se não)
// let dinheiro = 10;
// if(dinheiro >= 50){
//     console.log('Posso almoçar em um restaurante caro');
// } else if ( dinheiro >= 20){
//     console.log('Posso almoçar em um restaurante médio');
// } else if (dinheiro >= 10) {
//     console.log('Posso fazer um lanche rápido');
// } else {
//     console.log('Vou cozinhar em casa');
// }



//SWITCH/CASE
// switch(condicao){
//     case valor1: 
//     'faça algo'
//     break;
//     case valor2:
//         'faça algo'
//     break;
//     default:
// }
   
let pedido = 'sopa';
switch(pedido){
    case 'hamburguer':
        console.log('Preparando um lanchinho');
    break;
    case 'pizza':
        console.log('Preparando uma pizza');
    break;
    case 'sopa':
        console.log('Preparando uma sopa');
    break;
    default: 
        console.log('Não realizamos esse tipo de pedido');        
}
    
