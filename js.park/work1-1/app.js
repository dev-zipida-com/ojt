const root = document.getElementById('root');
const toDoinput = root.querySelector("#toDoinput");
const toDoListView = root.querySelector("#toDoListView");

function printTodo(toDo) {
  const hr = document.createElement('hr');
  console.log(toDo);
  toDoListView.append(toDo)
  toDoListView.appendChild(hr);
}

function toDoInputText(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    const toDo = toDoinput.value;
    if (!toDo) {
      alert('입력이 필요함');
    }
    else {
      printTodo(toDo);
    }
    toDoinput.value="";
  }
}


function init() {
  toDoinput.addEventListener('keydown',toDoInputText);
}
init()