const addButton = document.querySelector('#Add-button');
const item = document.querySelector('#Item');
const todoList = document.querySelector('#Todo-list');

let todoArr = [];

// localStorage 에 Todo List 저장
function saveTodoList() {
  localStorage.setItem('todoArr', JSON.stringify(todoArr));
}

function saveTodo(text) {
  const todo = {
    text,
    id : todoArr.length + 1
  };

  todoArr.push(todo);
  saveTodoList();
}

// todo 리스트 만들기 + todoArr 에 추가하고 저장하기
function viewTodo(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  span.innerHTML = text;
  deleteButton.innerText = 'Delete';
  deleteButton.id = todoArr.length + 1;
  deleteButton.addEventListener('click', todoDelete);

  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  saveTodo(text);
}

// delete 버튼 클릭 시 => 삭제할 인덱스로 todoArr 에서 삭제
function todoDelete(event) {
  const num = event.target.id;
  const li = event.button.parentNode;

  localStorage.removeItem(num);
  todoList.removeChild(li);
  todoArr = todoArr.filter((todo) => todo.id != Number(num));
  saveTodoList();
}

// 로컬스토리지에서 todoList 정보 가져오기
function loadToDoList() {
  const todoList = JSON.parse(localStorage.getItem('todoArr'));

  if (todoList) {
    todoList.forEach(({ text }) => viewTodo(text));
  }
}

// Todo Add 버튼 클릭시 => input 값으로 viewTodo() 호출 + input 값 초기화
function handleEvent(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    event.preventDefault();
    const todoContent = item.value.trim();

    if (!todoContent) {
      return alert('값을 입력해주세요.');
    }

    viewTodo(todoContent);
    item.value = "";
  }
}

// TodoList 시작
function init() {
  loadToDoList();
  item.addEventListener('keydown', handleEvent);
  addButton.addEventListener('click', handleEvent);
}

init();