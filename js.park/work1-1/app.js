const root = document.getElementById('root');
const toDoinput = root.querySelector("#toDoinput");
const toDoListView = root.querySelector("#toDoListView");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 49ff012 (완료)
const toDolist = root.querySelector("#toDolist");
const toDoAdd = root.querySelector("#toDoAdd")

const TODOLIST = "toDoList";
let toDoList = [ ];
let cnt = 0

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
    id: cnt,
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
  delButton.setAttribute("id", ++cnt);
  delButton.setAttribute("value", "Delete");
  delButton.addEventListener("click",delTodo);
  
  p.innerHTML = toDo;
  p.appendChild(delButton);
  p.id = cnt;
  p.appendChild(hr);
  toDolist.appendChild(p);
}

function toDoInputText(e) {
  if (e.key === 'Enter' || e.type === 'click') {
<<<<<<< HEAD
=======
=======
const toDolist = root.querySelector("#toDolist");
const toDoAdd = root.querySelector("#toDoAdd")
>>>>>>> 4a51f0b (add work1-1)

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
<<<<<<< HEAD
  if (e.key === 'Enter') {
>>>>>>> fecc952 (입력 후 하단 출력 기능)
=======
  if (e.key === 'Enter' || e.type === 'click') {
>>>>>>> 4a51f0b (add work1-1)
=======
>>>>>>> 49ff012 (완료)
    e.preventDefault()
    const toDo = toDoinput.value;
    if (!toDo) {
      alert('입력이 필요함');
    }
    else {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      printToDo(toDo);
      saveTodo(toDo);
=======
      printTodo(toDo);
>>>>>>> fecc952 (입력 후 하단 출력 기능)
=======
      printToDo(toDo);
      saveTodo(toDo);
>>>>>>> 4a51f0b (add work1-1)
=======
      printToDo(toDo);
      saveTodo(toDo);
>>>>>>> 49ff012 (완료)
    }
    toDoinput.value="";
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function init() {
  loadToDoList();
  toDoinput.addEventListener('keydown',toDoInputText);
  toDoAdd.addEventListener('click',toDoInputText);
=======

=======
>>>>>>> 4a51f0b (add work1-1)
function init() {
  loadToDoList();
  toDoinput.addEventListener('keydown',toDoInputText);
<<<<<<< HEAD
>>>>>>> fecc952 (입력 후 하단 출력 기능)
=======
  toDoAdd.addEventListener('click',toDoInputText);
>>>>>>> 4a51f0b (add work1-1)
=======
function init() {
  loadToDoList();
  toDoinput.addEventListener('keydown',toDoInputText);
  toDoAdd.addEventListener('click',toDoInputText);
>>>>>>> 49ff012 (완료)
}
init()