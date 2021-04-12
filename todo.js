const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";
let toDos = [];
let idNum = 1;

function delTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanTodos = toDos.filter(function filterFn(todo) {
    return todo.id !== parseInt(li.id);
  });
  toDos = cleanTodos;
  for (let i = 0; i < toDos.length; i++) {
    todoList.children[i].id = i + 1;
    toDos[i].id = i + 1;
  }
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  //const newId = idNum++;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", delTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  //li.id = newId;
  todoList.appendChild(li);
  const todoObj = {
    text: text,
    //id: newId,
  };
  toDos.push(todoObj);
  for (let i = 0; i < toDos.length; i++) {
    todoList.children[i].id = i + 1;
    toDos[i].id = i + 1;
  }
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedTodos = JSON.parse(loadedToDos);
    parsedTodos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
