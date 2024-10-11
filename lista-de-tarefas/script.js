//1.recuperar o valor do input
//2. ao clicar no botao add, adicionar a tarefa
//3. a tarefa deve ser levada para baixo, dentro da ul
//4. recuperar a ul
//5. o valor do input deve virar um item da lista
//6. esse item, deve ser adicionado a ul

const inputTask = document.querySelector('#new-task');
const btnAdd = document.querySelector('#addTasks');
const lista = document.querySelector('#tasks');

function deleteItem(event){
  const elementoAtual = event.target;
  const listItem = elementoAtual.parentElement;
  listItem.remove();  
};

function createTaks(){
  let valorDoInput = inputTask.value;

  // console.log('Valor do input', valorDoInput);
  // console.log('O input', inputTask);
  // console.log('lista',lista);

  //Criar um item da lista
  const itemLista = document.createElement('li');
  const btnDelete = document.createElement('button');
  btnDelete.innerText = 'Deletar';
  itemLista.innerText = valorDoInput;

  btnDelete.addEventListener('click', deleteItem);
  itemLista.classList.add('itemTask')
  itemLista.appendChild(btnDelete);
  lista.appendChild(itemLista);
};

btnAdd.addEventListener('click', function(event){
  //Retirando o comportamento padrão do botão
  event.preventDefault();
  createTaks();
  
});


