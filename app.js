let todoItem = document.querySelector(".todo-item");
let search = document.querySelector("#todo-search");
let userInput = document.querySelector("#user-input");
let addTodo = document.querySelector(".add-todo");
console.log(todoItem);

//adding a todo

addTodo.addEventListener("click", (e) => {
  let html = ` <li>${userInput.value} <i class="fas fa-trash del"></i></li>`;
  todoItem.insertAdjacentHTML("beforeend", html);
  e.preventDefault();
  userInput.value = "";
});

//delete functionality

todoItem.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  // add filtered class
  Array.from(todoItem.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  // remove filtered class
  Array.from(todoItem.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//filter functionality

search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodos(term);
});
