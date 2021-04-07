const root = document.getElementById('root');

const addBtn = document.querySelector('#add-btn'); // id가 add-btn
const todoTaskInput = document.querySelector('#todo-task'); // id가 todo-task
const toDoList = document.querySelector('#todo-list'); // id가 todo-list

let toDosArr = []; // localStorage key

function saveToDos(){ // localStorage에 저장
    localStorage.setItem('toDosArr', JSON.stringify(toDosArr));
}

function paintToDo(text){ // 화면 뿌려주기
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button'); // delete버튼 추가

    span.innerHTML = text;
    deleteBtn.innerText = 'Delete';
    deleteBtn.id = 'deleteBtn';
    deleteBtn.addEventListener('click', toDoDelete); // deleteBtn click Event
    li.appendChild(span); // li에 text넣어놓은 span추가
    li.appendChild(deleteBtn); // li에 deleteBtn추가
    toDoList.appendChild(li); // 리스트 추가

    const toDoObj = {
        text: text,
        id: toDosArr.length + 1
    };

    toDosArr.push(toDoObj);
    saveToDos(); // localStorage에 저장
}

function toDoDelete(e){ // deleteBtn click Event
    const deletedTarget = e.target.parentNode; // 삭제해야 할 노드
    const selectedList = document.querySelectorAll('li'); // li태그 전부 선택
    const arrayList = [...selectedList]; // selectedList 깊은 복사

    // arrayList안에 deletedTarget의 인덱스 반환
    const deleteIndex = arrayList.indexOf(deletedTarget); 

    // localStorage에 toDosArr이라는 키값을 가진 object 받아와서 parse
    const getList = JSON.parse(localStorage.getItem('toDosArr')); 

    deletedTarget.remove();
    getList.splice(deleteIndex, 1);
    toDosArr = getList; // 삭제된 값으로 toDosArr갱신
    saveToDos();

}

function handleClick(event){
    event.preventDefault();
    const toDoText = todoTaskInput.value;
    paintToDo(toDoText); 
    todoTaskInput.value=""; // todo input 초기화
}

function loadToDoList(e){
    const getList = JSON.parse(localStorage.getItem('toDosArr'));
    if(getList === null){

    } else{
        getList.forEach(function(e){
            paintToDo(e.text);
        });
    }
}

function init(){
    loadToDoList();
    addBtn.addEventListener('click', handleClick);
}

init(); 