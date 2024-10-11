//Crie uma nova tarefa 
//Criar esse novo item


//1.Criar o elemento -> createElement()
//2. Atrelar a algum elemento que já esteja no html -> appendChild()

//1. O que eu quero criar?
//R: Um item da lista -> <li> </li>
const itemList = document.createElement('li');
console.log(itemList);

itemList.innerText = 'Lavar roupa';

//2.Onde eu quero colocar esse item criado?
//R: no body
//2. Recuperar onde eu quero colocar
const list = document.getElementById('listaTarefas');
list.appendChild(itemList);


//Criar mais um item para a lista
//1.Como eu crio um item ? -> createElement
//2.Mas qual item eu quero criar ? -> <li>
//3. Quero colocar algum estilo ou texto? Sim, quero colocar texto
//4.Onde eu quero colocar esse item ? quero colocar na ul
//5.O que eu preciso para colocar o item na ul ? 
//5.1 Recuperar a ul
// 5.2 Adicionar a li como filho da ul
//1
const itemDaLista = document.createElement('li');
itemDaLista.innerText = 'Almoçar';

const listaDeTarefas = document.querySelector('#listaTarefas');
console.log(listaDeTarefas);

listaDeTarefas.appendChild(itemDaLista);


