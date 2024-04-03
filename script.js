let todos = [];
let tareaMasRapidaEncontrada = false;
let primeraTareaCompletada = null;

function agregarTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todo = {
      text: todoText,
      timestamp: new Date(),
      completed: false
    };
    todos.push(todo);
    mostrarTodos();
    todoInput.value = '';
  }
}

function mostrarTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${todo.text} - ${new Date(todo.timestamp).toLocaleString()}</span>`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      if (!tareaMasRapidaEncontrada && todo.completed && !primeraTareaCompletada) {
        primeraTareaCompletada = todo;
      }
    });
    listItem.appendChild(checkbox);
    if (todo.completed) {
      listItem.classList.add('completed');
    }
    todoList.appendChild(listItem);
  });
}

function mostrarTareaMasRapida() {
  if (primeraTareaCompletada) {
    alert(`La tarea que se completo mas rapido fue: ${primeraTareaCompletada.text}`);
  } else {
    alert('No hay tareas completadas aún.');
  }
}

function eliminarTodos() {
  todos = [];
  primeraTareaCompletada = null;
  mostrarTodos();
}

mostrarTodos();
