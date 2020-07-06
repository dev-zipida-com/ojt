const root = document.getElementById('root'); // HTML <div id="root">

const addButton = root.querySelector('#add-button'); // HTML <input id="add-button">
const todoList = root.querySelector('#incomplete-tasks') // HTML <ul id="incomplete-tasks">
const todoForm = root.querySelector('#new-task') // // HTML <input id="new-task">

let toDos = []; // todolist를 담기위한 localstorage key "toDos" 배열

function addTodo(event) { // 버튼 클릭 이벤트
    const todoValue = todoForm.value;
    const keyCode = event.keyCode;
    const clickBtn = event.type;

    if (keyCode=="13" || clickBtn=="click") { // 엔터키를 누르거나 버튼 클릭시 이벤트 발생
        if(todoValue=="") { // 입력 받은 후 빈칸 체크
            alert("빈칸입니다.") // 에러 메시지
            todoForm.focus(); // 입력창 포커스
        } else {
            insertTodo(todoValue); // todoValue -> function todoInput(text);
            todoForm.value = ""; // todoForm 초기화
        }
    }
}

function insertTodo(text) {
    let li = document.createElement("li"); // li 동적 생성
    let deleteBtn = document.createElement("button"); // Delete Button 동적 생성
    let todoId = toDos.length + 1 // 배열 길이에 맞게 id 생성
    li.innerText = text; // todoValue 삽입
    li.id = todoId; // 삭제를 위해 localStorage ID와 동일하게 부여
    deleteBtn.innerText = "Delete"; // Delete Text 삽입
    deleteBtn.id = "deleteBtn"
    deleteBtn.addEventListener("click", deleteTodo);
    li.appendChild(deleteBtn); // li 태그에 deleteBtn 버튼 추가
    todoList.appendChild(li);

    todoObj = {
        id : todoId, // 비교 삭제를 위한 아이디 부여
        text : text // todoText 저장
    };

    toDos.push(todoObj); // todoObj를 배열에 순차적으로 push

    saveTodo(); // localstorage key = todoId, Value = todoObj;
}

function deleteTodo(event) {
    const liDelete = event.target.parentNode; //선택된 deletBtn의 부모노드 li
    let liId = liDelete.id;
    liDelete.remove();

    const cleanTodo = toDos.filter(function(e) {
        return e.id !== parseInt(liId);
    })

    toDos = cleanTodo; // filter된 cleanTodo 객체를 toDos에 교체
    saveTodo(); // localstorage에 바뀐 toDos를 삽입
}

function saveTodo() {
    localStorage.setItem("toDos", JSON.stringify(toDos)); // obj -> string
    
}

function loadTodo() {
    const todoLoacl = localStorage.getItem("toDos"); // localStorage Key "toDos" 가져오기
    let todoParse = JSON.parse(todoLoacl); // string -> obj
    if(todoParse != null) {
        todoParse.forEach(function(e) { // toDos Value => text 값을 insertTodo로 전송
            insertTodo(e.text);
        });
    }
}


function init() {
    todoForm.addEventListener("keydown", addTodo);
    addButton.addEventListener("click", addTodo);
    loadTodo();
}

init();