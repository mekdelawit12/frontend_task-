const tasks = [
  { id: 'id1', title: 'Groceries', completed: false },
  { id: 'id2', title: 'Read book', completed: true }
];

const taskList = document.getElementById('tasklist');
const form = document.getElementById('taskform');
const input = document.getElementById('newtaskinput');

function renderTasks() {
  taskList.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const li = document.createElement('li');
    if (task.completed) {
      li.classList.add('completed');
    }


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', function() {
      task.completed = this.checked;
      renderTasks();
    });

    
    const span = document.createElement('span');
    span.textContent = task.title;

   
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
      tasks.splice(i, 1);
      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const newTask = input.value.trim();
  if (newTask !== '') {
    tasks.push({
      id: 'id' + (tasks.length + 1),
      title: newTask,
      completed: false
    });
    input.value = '';
    renderTasks();
  }
});

renderTasks();
