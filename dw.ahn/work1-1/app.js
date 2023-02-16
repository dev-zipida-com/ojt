const textInput = document.querySelector("#todoInput");
const inputForm = document.querySelector(".inputForm");
const todoList = document.querySelector(".todoList__main");
const todoTask = document.querySelector(".todoList__foot__task");
todoTask.innerHTML = `You have ${todoList.childElementCount} pending tasks`;

const addBtn = document.querySelector(".input__btn");
const clearAllBtn = document.querySelector(".todoList__foot__clearBtn");

inputForm.addEventListener("submit", handleSubmit);
clearAllBtn.addEventListener("click", clickClearAll);

let todoArr = [];
const storageItems = JSON.parse(localStorage.getItem("todoItems"));

// localStorage.setItem
// localStorage.getItem

// es6 어떤 문법이 적용되었는지 보면 좋을것 같다

// 최초 load때
// storageItems가 true이면 실행 되겠네
if (storageItems) {
  storageItems.forEach((e) => {
    addToDo(e);
    todoArr.push(e);
  });
}

function addToDo(newTodoItem) {
  // div 태그
  const todoItem = document.createElement("div");
  todoItem.setAttribute("class", "todoList__main__item");
  todoItem.setAttribute("id", `${newTodoItem.id}`);

  // p태그에 input값 set
  const item = document.createElement("p");
  item.setAttribute("class", "todoList__main__item--text");
  item.innerText = `${newTodoItem.text}`;

  // 생성된 todo 옆 button
  const button = document.createElement("button");
  // .trash { ... }
  //  위 명칭으로 css적용 했는데 css 먹네
  button.setAttribute("class", "trash deleteBtn fa-solid fa-trash-can");
  button.addEventListener("click", (e) => {
    deleteHandler(todoItem, e);
  });

  todoItem.append(item);
  todoItem.append(button);
  todoList.append(todoItem);
}

// es6, 템플릿 리터럴
function ChangeTaskNum() {
  todoTask.innerHTML = `You have ${todoList.childElementCount} pending tasks`;
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(textInput.value);
  if (textInput.value == "") {
    return false;
  }

  // validation 후
  const newTodoItem = {
    id: Date.now(),
    text: textInput.value,
  };
  todoArr.push(newTodoItem);
  localStorage.setItem("todoItems", JSON.stringify(todoArr));

  addToDo(newTodoItem);

  ChangeTaskNum();
  textInput.value = " ";
}

function deleteHandler(todoItem, e) {
  let targetId = e.target.parentElement.id;
  todoList.removeChild(todoItem);
  console.log(typeof targetId);

  // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
  todoArr = todoArr.filter((todo) => todo.id !== parseInt(targetId));
  console.log(todoArr);
  localStorage.setItem("todoItems", JSON.stringify(todoArr));
}

function clickClearAll() {
  // [DOM_Element] JS - hasChildNodes() 메서드
  // 지정 노드에 자식노드 있으면 true 반환. 그렇지 않으면 false 반환.
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  ChangeTaskNum();
}
