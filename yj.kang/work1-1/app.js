const root = document.getElementById('root'); // HTML <div id="root">

const addButton = root.childNodes[3].childNodes[5]; // HTML <input id="add-button">
const todoList = root.childNodes[7] // HTML <ul id="incomplete-tasks">
const todoForm = root.childNodes[3].childNodes[3] // // HTML <input id="new-task">

var toDos = []; // todolist를 담기위한 localstorage key "toDos" 배열

function addTodo(e) { // 버튼 클릭 이벤트
    var todoValue = todoForm.value;
    if (window.event.keyCode==13 || e.type=="click") { // 엔터키를 누르거나 버튼 클릭시 이벤트 발생
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
    var li = document.createElement("li"); // li 동적 생성
    var deleteBtn = document.createElement("button"); // Delete Button 동적 생성
    var todoId = toDos.length + 1 // 배열 길이에 맞게 id 생성
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
    var del_li = event.target.parentNode; //선택된 deletBtn의 부모노드 li
    var id_li = del_li.id;
    del_li.remove();

    console.log(toDos);
    const cleanTodo = toDos.filter(function(e) {
        return e.id !== parseInt(id_li);
    })

    toDos = cleanTodo; // filter된 cleanTodo 객체를 toDos에 교체
    saveTodo(); // localstorage에 바뀐 toDos를 삽입
}

function saveTodo() {
    localStorage.setItem("toDos", JSON.stringify(toDos)); // obj -> string
    
}

function loadTodo() {
    var local_Todo = localStorage.getItem("toDos"); // localStorage Key "toDos" 가져오기
    var parse_Todo = JSON.parse(local_Todo); // string -> obj
    if(parse_Todo != null) {
        parse_Todo.forEach(function(e) { // toDos Value => text 값을 insertTodo로 전송
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