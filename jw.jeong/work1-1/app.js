const root = document.getElementById('root');

/*
root.children
0: h1
1: div.add-section
2: h3
3: ul#incomplete-tasks
*/
/*
<div class="add-section">.children
0: label
1: input#new-task
2: button#add-button
 */
var toDo_text = root.children[1].children[1],
    toDo_button = root.children[1].children[2],
    toDo_list = root.children[3];

var storage = localStorage;

function getTodo(e){  
    var keycode = window.event.keyCode
    var toDo = toDo_text.value;
    var blank_check = /[\s]/g;
    if(keycode == 13 && toDo !== '' && !blank_check.test(toDo)){ // enter의 keyCode는 13
        var storageKey = toDo; //key값에 스토리지 길이만큼 입력
        storage.setItem(storageKey,toDo); // session 저장
        toDo_list.append(createIndex(toDo)); // tasks 버튼추가 
        toDo_text.value = '';
    }else if(e.type == 'click' && toDo !=='' && !blank_check.test(toDo)){
        var storageKey = toDo; //key값에 스토리지 길이만큼 입력
        storage.setItem(storageKey,toDo); // session 저장
        toDo_list.append(createIndex(toDo)); // tasks 버튼추가 
        toDo_text.value = '';
    }
}

function createIndex(toDo){
    var div = document.createElement('ul'),
        button = document.createElement('input');
    div.className=toDo;
    div.innerHTML=toDo;
    button.type = 'button';
    button.value = 'Delete';
    button.addEventListener('click',deleteTodo); //삭제 이벤트
    div.append(button); // 삭제버튼 추가
    return div;
}

function deleteTodo(e){
    var deleteIndex = e.target.parentNode;
    storage.removeItem(deleteIndex.className);
    toDo_list.removeChild(deleteIndex);
    
}

function getStorage(){
    let stoargeLength = storage.length;
    for(let i=0;i<=stoargeLength-1;i++){
        let storageKey = storage.key(i)
        toDo_list.append(createIndex(storage.getItem(storageKey)))
    }
}

function init(){
    toDo_text.addEventListener("keydown",getTodo);
    window.onload = function(){
        getStorage()
    }
    toDo_button.addEventListener("click",getTodo);
}
init()