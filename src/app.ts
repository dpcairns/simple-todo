type ValidTask = 'wash dishes' | 'walk the dog' | 'mow the lawn' | 'weed the garden'

type Todo = {
  todo: ValidTask,
  completed: boolean
}

type TodoList = Array<Todo> 

const form = document.querySelector('form');
const todoListEl = document.querySelector('.todos')

const todos : TodoList = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const newTodoString = data.get('todo') as ValidTask;

  const newTodo = {
    todo: newTodoString,
    completed: false
  }

  todos.push(newTodo)

  displayTodos();

  form.reset();
})

export function renderTodo(todo : Todo) {
  const todoEl = document.createElement('p')

  todoEl.textContent = todo.todo;
  
  if (todo.completed) {
    todoEl.classList.add('completed')
  }

  return todoEl;
}

function displayTodos() {
  todoListEl.textContent = '';

  for (let todo of todos) {
    const todoEl = renderTodo(todo);

    todoListEl.append(todoEl);   
  }
}

window.addEventListener('load', () => {
  displayTodos();
})