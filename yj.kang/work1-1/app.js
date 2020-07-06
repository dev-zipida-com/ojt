const root = document.getElementById('root'); // HTML <div id="root">

const addButton = root.querySelector('#add-button'); // HTML <input id="add-button">
const todoList = root.querySelector('#incomplete-tasks') // HTML <ul id="incomplete-tasks">
const todoForm = root.querySelector('#new-task') // // HTML <input id="new-task">

let toDos = []; // todolist를 담기위한 localstorage key "toDos" 배열

function addTodo(e) { // 버튼 클릭 이벤트
    const todoValue = todoForm.value;

    if (e.key==='Enter' || e.type=="click") { // 엔터키를 누르거나 버튼 클릭시 이벤트 발생
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
    let newId = toDos.length + 1;
    li.innerText = text; // todoValue 삽입
    li.id = newId; // 삭제를 위해 localStorage ID와 동일하게 부여
    deleteBtn.innerText = "Delete"; // Delete Text 삽입
    deleteBtn.id = "deleteBtn"
    deleteBtn.addEventListener("click", deleteTodo);
    li.appendChild(deleteBtn); // li 태그에 deleteBtn 버튼 추가
    todoList.appendChild(li);

    todoObj = {
        id : newId, // 비교 삭제를 위한 아이디 부여
        text : text // todoText 저장
    };

    toDos.push(todoObj); // todoObj를 배열에 순차적으로 push

    saveTodo(); // localstorage key = todoId, Value = todoObj;
}

function deleteTodo(event) {
    const liDelete = event.target.parentNode; //선택된 deletBtn의 부모노드 li
    let liId = liDelete.id;
    liDelete.remove();

    let resetTodo = []; // filter로 해당 todolist 삭제 후 id값 초기화를 위한 배열

    const cleanTodo = toDos.filter(function(e) { 
        return e.id !== parseInt(liId); // toDos에서 선택된 id를 제외한 나머지를 찾아온다.
    })

    for(let i = 1; i <= cleanTodo.length; i++) { // 선택된 todolist 제거후 id값 초기화
        let resetObj = {}; // Obj
        resetObj['id'] = i
        resetObj['text'] = cleanTodo[i-1].text;
        liDelete.id = i;
        resetTodo.push(resetObj); // 해당 Obj를 resetTodo에 push
    }
    console.log(resetTodo);

    toDos = resetTodo; // toDos를 최종정리된 resetTodo로 변경
    saveTodo(toDos); // 저장
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
    todoForm.addEventListener("keypress", addTodo); // 한글 2번 입력 오류로 keydown -> keypress 로 변경
    addButton.addEventListener("click", addTodo);
    loadTodo();
}

init();