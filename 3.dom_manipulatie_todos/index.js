const todos = [
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
    id: Math.random().toString(36).substring(2),
    todo: "JS coderen",
    checked: false,
  },
  {
    id: Math.random().toString(36).substring(2),
    todo: "Afwas doen",
    checked: true,
  },
];

function renderTodos() {
  document.querySelector("ul").innerHTML = todos
    .map(function (todoObj) {
      return `
        <li>
          <span>${todoObj.todo}</span>
          <a href="#" class="delete">delete</a>
          <a href="#" class="check">check</a>
        </li>
    `;
    })
    .join("");
}
renderTodos();

document.querySelector("form button").onclick = function () {
  todos.push({
    id: Math.random().toString(36).substring(2),
    todo: document.querySelector("form input").value,
    checked: false,
  });
  renderTodos();
};
