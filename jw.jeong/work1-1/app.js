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
    if((keycode == 13 || e.type=='click') && toDo !== ''){ // enter의 keyCode는 13 || e.type == click 둘 중하나의 이벤트가 실행이되면 입력 이벤트가 실행합니다.
        var storageKey = toDo; //key값에 스토리지 길이만큼 입력
        storage.setItem(storageKey,toDo); // localstroage 저장
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
    var deleteIndex = e.target.parentNode; //e.target은 button을 추적하여 부모노드를 추적합니다.
    storage.removeItem(deleteIndex.className);//localStorage에서 제거해줍니다.
    toDo_list.removeChild(deleteIndex);//todo list에서 항목 삭제합니다.
    
}

function getStorage(){//화면의 다시 온로드하면 실행합니다.
    let stoargeLength = storage.length;
    for(let i=0;i<=stoargeLength-1;i++){
        let storageKey = storage.key(i) //key값을 길이만큼 받아옵니다.
        toDo_list.append(createIndex(storage.getItem(storageKey))) //todo list에 차례대로 쌓아줍니다.
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