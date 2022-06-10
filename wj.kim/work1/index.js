// 태그 생성
const root = document.getElementById('root');

const title = document.createElement('h1');
title.textContent = 'Todo App';

const addTitle = document.createElement('h4');
addTitle.textContent = 'ADD ITEM';
addTitle.className = 'small-title';

const todoTitle = document.createElement('h4');
todoTitle.textContent = 'TODO';
todoTitle.className = 'small-title';

const inputForm = document.createElement('div');
inputForm.id = 'input-form'

const input = document.createElement('input');
input.id = 'add-todo';
input.onkeyup = pressEnter;

const addButton = document.createElement('input');
addButton.value = 'Add';
addButton.type = 'button';
addButton.className = 'button';
addButton.onclick = addTodo;

inputForm.appendChild(input);
inputForm.appendChild(addButton);

const ul = document.createElement('ul');
ul.id = 'todo-list'

root.appendChild(title);
root.appendChild(addTitle);
root.appendChild(inputForm);
root.appendChild(todoTitle);
root.appendChild(ul);


makeTodoList();


// todo 추가
function addTodo() {
  let todo = document.getElementById('add-todo');

  if(todo.value) {
    let todoId;
    const list = getList();

    if(list.length) todoId = list[list.length-1].todoId + 1;
    else todoId = 0;

    const newTodo = {
      todo: todo.value,
      todoId,
    }
    setList([...list, newTodo]);

    makeTodo(newTodo);
  } else {
    alert('please input todo')
  }
  todo.value = '';
}

// todo 삭제
function deleteTodo(e) {
  const delNode = e.target.parentNode;
  const delId = delNode.id;
  console.log(delId)

  const list = getList()
  const FilteredList = list.filter(el => el.todoId !== Number(delId));

  setList(FilteredList);

  ul.removeChild(delNode);
}

// enter 눌렀을 때 todo 추가
function pressEnter(e) {
  if(e.key === 'Enter') {
    addTodo();
  }
}

// todo 목록 생성
function makeTodo(item) {
  const li = document.createElement('li');
  li.id = item.todoId;

  const text = document.createElement('div');
  text.textContent = item.todo;

  const delBtn = document.createElement('input');
  delBtn.className = 'button';
  delBtn.type = 'button';
  delBtn.value = 'Delete';
  delBtn.onclick = deleteTodo;

  li.appendChild(text);
  li.appendChild(delBtn);
  ul.appendChild(li);
}

// 전체 todo list 생성
function makeTodoList() {
  const list = getList();

  if(list.length){
    for(let i=0; i<list.length; i++) {
      makeTodo(list[i]);
    }
  }
}

// todo list 받아오기
function getList() {
  return JSON.parse(localStorage.getItem('todo'));
}

// todo list 세팅
function setList(list) {
  const strList = JSON.stringify(list);
  localStorage.setItem('todo', strList);
}










