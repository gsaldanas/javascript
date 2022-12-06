let todos = [
  {
    id: Math.random().toString(36).substring(2),
    todo: "gras afrijden",
    checked: false,
  },
  {
    id: Math.random().toString(36).substring(2),
    todo: "tv kijken",
    checked: false,
  },
  {
    id: "abcd",
    todo: "den afwas doen",
    checked: true,
  },
  {
    id: Math.random().toString(36).substring(2),
    todo: "muziek luisteren",
    checked: false,
  },
];

//functie om elementen uit te lezen en html lijst te genereren
function renderTodos() {
  document.querySelector("ul").innerHTML = todos
    .map(function (todoObj) {
      return `<li class="${
        todoObj.checked ? "checked" : ""
      }" data-id="${todoObj.id}">
        <span>${todoObj.todo}</span>
        <a href="#" class="delete">delete</a>
        <a href="#" class="check">check</a>
      </li>`;
    })
    .join("");
}

renderTodos();

document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  todos.push({
    id: Math.random().toString(36).substring(2),
    todo: document.querySelector("form input").value,
    checked: false,
  });
  document.querySelector("form input").value = "";
  renderTodos();
};

function removeTodo(idToDelete) {
  todos = todos.filter(function (todoObj) {
    return todoObj.id != idToDelete;
  });
  renderTodos();
}

function toggleTodo(idToToggle) {
  todos = todos.map(function (todoObj) {
    return {
      id: todoObj.id,
      todo: todoObj.todo,
      checked: todoObj.id === idToToggle ? !todoObj.checked : todoObj.checked,
    };
  });
}

document.querySelector("ul").onclick = function (e) {
  if (e.target.className === "delete") {
    removeTodo(e.target.parentElement.dataset.id);
    renderTodos();
  }
  if (e.target.className === "check") {
    toggleTodo(e.target.parentElement.dataset.id);
    renderTodos();
  }
};
