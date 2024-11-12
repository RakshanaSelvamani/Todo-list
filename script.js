const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
let tasks = [];
function addTask(task) {
    tasks.push({ text: task, completed: false });
    renderTaskList();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTaskList();
}
function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTaskList();
}
function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskElement.textContent = task.text;
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(index));
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleCompletion(index));
        taskElement.appendChild(checkbox);
        taskElement.appendChild(document.createTextNode(' '));
        taskElement.appendChild(deleteBtn);
        taskList.appendChild(taskElement);
    });
}
addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});
renderTaskList();