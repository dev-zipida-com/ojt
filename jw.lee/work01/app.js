function app(){
  // HTML 구성
  const root = document.querySelector("#root");
  localStorage.setItem("todoList", JSON.stringify([]));

  const title = document.createElement("h1");
  title.innerHTML = "Todo App"
  root.appendChild(title);
  
  const subTitle01 = document.createElement("h3");
  subTitle01.innerHTML = "ADD ITEM"
  root.appendChild(subTitle01);

  const line01 = document.createElement("div");
  line01.classList.add("line");
  root.appendChild(line01);

  const inputWrap = document.createElement("div");
  inputWrap.classList.add("inputWrap");
  root.appendChild(inputWrap);

  const input = document.createElement("input");
  input.classList.add("input");
  input.addEventListener( "keydown" , pressEnter );
  root.appendChild(input);

  const addBtn = document.createElement("button");
  addBtn.innerHTML = "Add"
  addBtn.classList.add("addBtn");
  addBtn.onclick = addTask;
  root.appendChild(addBtn);

  const subTitle02 = document.createElement("h3");
  subTitle02.innerHTML = "TODO"
  root.appendChild(subTitle02);

  const line02 = document.createElement("div");
  line02.classList.add("line");
  root.appendChild(line02);

  const listWrap = document.createElement("ul");
  listWrap.classList.add("listWrap");
  root.appendChild(listWrap);
  // HTML 구성 '끝'

  function pressEnter(event){
    if (event.keyCode === 13) addTask();
  }

  function addTask(){
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    const newTask = {
      id: todoList.length,
      content : input.value
    }
    localStorage.setItem("todoList", JSON.stringify([newTask, ...todoList]));
    getTodoList();
  }

  function getTodoList(){
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    renderListComp(todoList)
  }

  function removeTask(id){
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    const newArr = todoList.filter((item)=> item.id !== id);
    localStorage.setItem("todoList", JSON.stringify(newArr));
    renderListComp(newArr)
  }

  // 삭제 후 list 리렌더링
  function renderListComp(arr){
    listWrap.innerHTML = '';
    arr.forEach(item => {
      const listItem = document.createElement("li");
      listItem.classList.add("listItem");
      listWrap.appendChild(listItem);
  
      const listContent = document.createElement("p");
      listContent.innerHTML = item.content;
      listContent.classList.add("listContent");
      listItem.appendChild(listContent);
      
      const delBtn = document.createElement("button");
      delBtn.innerHTML = "Delete"
      delBtn.classList.add("delBtn");
      delBtn.addEventListener( "click" , ()=>removeTask(item.id) );
      listItem.appendChild(delBtn);
    });
  }
}
app();