const root = document.getElementById('root');
const toDoinput = root.querySelector("#toDoinput");
const toDoListView = root.querySelector("#toDoListView");
const toDolist = root.querySelector("#toDolist");
const toDoAdd = root.querySelector("#toDoAdd")

const TODOLIST = "toDoList";
let toDoList = [ ];

function loadToDoList() {
  const loadedToDoList = localStorage.getItem(TODOLIST);
  if (loadedToDoList !== null) {
    const parsedToDoList = JSON.parse(loadedToDoList);
    for (let toDo of parsedToDoList) {
      const { text } = toDo;
      printToDo(text);
      saveTodo(text);
    }
  }
}

function saveTodo(toDo) {
  const toDoObj = {
    text: toDo,
    id: toDoList.length+1,
  };
  toDoList.push(toDoObj);
  localStorage.setItem(TODOLIST,JSON.stringify(toDoList));
}

function saveToDoList() {
  localStorage.setItem(TODOLIST,JSON.stringify(toDoList));
}

function delTodo(e) {
  const a = e.target.id;
  const { target: input } = e;
  const li = input.parentNode;
  toDolist.removeChild(li);
  toDoList = toDoList.filter((toDo) => toDo.id !== Number(a));
  localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
  saveToDoList();  
}

function printToDo(toDo) {
  const hr = document.createElement('hr');
  const p = document.createElement('p');
  const span =document.createElement('span');
  const delButton = document.createElement('input');

  delButton.setAttribute("type", "submit");
  delButton.setAttribute("id", toDoList.length+1);
  delButton.setAttribute("value", "Delete");
  delButton.addEventListener("click",delTodo);
  
  p.innerHTML = toDo;
  p.appendChild(delButton);
  p.id = toDoList.length+1;
  p.appendChild(hr);
  toDolist.appendChild(p);
}

function toDoInputText(e) {
  if (e.key === 'Enter' || e.type === 'click') {
    e.preventDefault()
    const toDo = toDoinput.value;
    if (!toDo) {
      alert('입력이 필요함');
    }
    else {
      printToDo(toDo);
      saveTodo(toDo);
    }
    toDoinput.value="";
  }
}

function init() {
  loadToDoList();
  toDoinput.addEventListener('keydown',toDoInputText);
  toDoAdd.addEventListener('click',toDoInputText);
}
init()