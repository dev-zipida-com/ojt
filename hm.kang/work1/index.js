//초기 구성 

var title = document.createElement("h1")
title.innerHTML = "할일 목록";

var addTitle = document.createElement("h3");
addTitle.innerHTML = "할일 추가";

var todoTitle = document.createElement("h3");
todoTitle.innerHTML = "할일 목록";

var addDiv = document.createElement("div");
addDiv.className = "addSection";
var addInput = document.createElement("input");
addInput.type = "text";
var addButton = document.createElement("button");
addButton.className = "add-btn";
addButton.innerHTML = "추가";


addDiv.appendChild( addInput );
addDiv.appendChild( addButton );


var todoTable = document.createElement("table");
var todoList = document.createElement("tbody");
todoTable.appendChild( todoList );



var root = document.getElementById("root");

//root div 트리에 맞게 구성
root.appendChild( title )
root.appendChild( addTitle )
root.appendChild( addDiv )
root.appendChild( todoTitle )
root.appendChild( todoTable )

addButton.onclick = addTodo;
addInput.addEventListener( "keypress" , checkPressedEnter , false );

//input enter 입력
function checkPressedEnter( event ){
    if( event.keyCode == 13 ) addTodo();
}

function addTodo( e ){
    let uuid = uuidv4();
    let newTodo = document.createElement("tr");
    newTodo.id = uuid;

    let todoLabel = document.createElement("label");
    todoLabel.className = "todo-label";
    todoLabel.innerHTML = addInput.value;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "삭제";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = deleteTodo;

    newTodo.appendChild( todoLabel );
    newTodo.appendChild( deleteButton );
    
    todoList.prepend( newTodo );

    localStorage.setItem( uuid, addInput.value );

    addInput.value = "";

}

function deleteTodo( e ){
    console.log( e );
    let deleteData = e.target.parentNode
    localStorage.removeItem(deleteData.id);
    deleteData.remove();
} 


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }