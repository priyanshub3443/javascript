let todoList = [{
  item: 'Buy Milk',
  dueDate: '4/9/2025'
},
  {item: 'Go to college',
  dueDate: '4/9/2025'
}];
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');

  let newHyml = '';

  for (let i = 0; i < todoList.length; i++) {
    let item=todoList[i].item;
    let dueDate=todoList[i].dueDate;
    newHyml += `
    

    <span>${item} </span>
    <span>${dueDate} </span>
    <button onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
    `;

  }
  containerElement.innerHTML = newHyml;
}