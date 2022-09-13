const root = document.getElementById('root');

const addBtn = document.querySelector('#button1'); 
const insertItemText = document.querySelector('#itemText'); 
const todoList = document.querySelector('#list'); 

let item = [];

function insertItem(text){

  var sendParam = {};
  sendParam.text = text;
  sendParam.id = item.length + 1;
  item.push(sendParam);
  localStorage.setItem('item', JSON.stringify(item));
  sendParam = {};
  selectList();
}

function reloadPage(){

}


function selectList(){

  var getList = JSON.parse(localStorage.getItem('item'));

  if(getList === null){
    return false;
  } else{
      getList.forEach(function(item){
        // drawList(item.text);
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteBtn = document.createElement('button');
        
        span.innerHTML = item.text;
        deleteBtn.innerText = 'Del';
        deleteBtn.id = 'delBtn';

        li.appendChild(span); // li에 text넣어놓은 span추가
        li.appendChild(deleteBtn); // li에 deleteBtn추가
        todoList.appendChild(li); // 리스트 추가
      });
  }
  item = getList;
  getList = [];
}

function drawList(item){
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');

  span.innerHTML = item;
  deleteBtn.innerText = 'Del';
  deleteBtn.id = 'delBtn';
  // deleteBtn.addEventListener('click', toDoDelete); // deleteBtn click Event
  li.appendChild(span); // li에 text넣어놓은 span추가
  li.appendChild(deleteBtn); // li에 deleteBtn추가
  todoList.appendChild(li); // 리스트 추가
}

function initPage(){
  selectList();
}

// localStorage.clear();

initPage();