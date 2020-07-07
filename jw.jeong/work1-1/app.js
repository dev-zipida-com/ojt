const root = document.getElementById('root');

/* 수정전 var todoText = root.children[1].children[1],
todoButton = root.children[1].children[2],
todoList = root.children[3];*/
const todoText = root.querySelector("#new-task"), // o
    todoButton = root.querySelector("#add-button"),
    todoTask = root.querySelector("#incomplete-tasks");

const storage = localStorage;
function getTodo(e){  
    const keyCode = e.key;
    const todo = todoText.value;
    if(storage.key('todoList')==null){
        storage.setItem('todoList',JSON.stringify([]));
    }
    if((keyCode == 'Enter' || e.type=='click') && todo !== ''){ // enter의 keyCode는 13 || e.type == click 둘 중하나의 이벤트가 실행이되면 입력 이벤트가 실행합니다.
        let todoList = localStorage.getItem('todoList');
        todoList = JSON.parse(todoList);
        todoList.push(todo);
        storage.setItem('todoList',JSON.stringify(todoList));
        todoTask.append(createIndex(todo)); // tasks 버튼추가 
        todoText.value = '';
    }
}

function createIndex(todo){
    let div = document.createElement('ul'),
        button = document.createElement('input');
    div.className=todo; 
    div.innerHTML=todo;
    button.type = 'button';
    button.value = 'Delete';
    button.addEventListener('click',deleteTodo); //삭제 이벤트
    div.append(button); // 삭제버튼 추가
    return div;
}

function deleteTodo(e){
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    let deleteValue = e.target.parentNode; //e.target은 button을 추적하여 부모노드를 추적합니다.
    //filter를 사용하면 스토리지에서 받아온 값을 각각 task에 담아서 객체 하나씩 사용할 수 있습니다
    //task랑 삭제하려는 값과 동일한지 안한지 체크를 한 후 이 값과 동일하지 않은값을 delete리스트에 넣어줍니다.
    //delete을 다시 todoList를 이름으로 스토리지에 setItem해줍니다.
    /*todoList = todoList.filter(task => { 
        if(task !=deleteValue.className){
            deleteList.push(task);
        }else{
            break
        }
    })*/
    for(let task of todoList){
        if(task == deleteValue.className){
            todoList.splice(todoList.indexOf(task),1,)
            break
        }
    }
    storage.setItem('todoList',JSON.stringify(todoList));
    todoTask.removeChild(deleteValue);//todo list에서 항목 삭제합니다.   */
}

function getStorage(){
    //삭제하는 방법과 동일하게 task에 담아서 하나씩 생성해주었습니다.
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList.filter(task =>{
        todoTask.append(createIndex(task)); // tasks 버튼추가 
    })
}


function init(){
    todoText.addEventListener("keydown",getTodo);
    window.onload = function(){
        getStorage()
    }
    todoButton.addEventListener("click",getTodo);
}
init()