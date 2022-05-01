const todos = JSON.parse(localStorage.getItem("todos")) || [];

const render = () => {
  const todoList = document.getElementById("todo-list");
  const todoTemplate = todos.map((t) => `<li class="chores">${t}   press here to delete</li>`);
  todoList.innerHTML = todoTemplate.join(" ");
  const elements = document.querySelectorAll("#todo-list li");
  elements.forEach((element, i) => {
    element.addEventListener("click", () => {
      element.parentNode.removeChild(element);
      todos.splice(i, 1);
      render(updateTodos(todos));
    });
  });
};

const updateTodos = (todos) => {
  const todoString = JSON.stringify(todos);
  localStorage.setItem("todos", todoString);
};

window.onload = () => {
  render();
  const form = document.getElementById("todo-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    render(updateTodos(todos));
  };
};
