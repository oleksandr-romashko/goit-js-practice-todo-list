const elements = {
  form: document.querySelector(".js-todo-form"),
  filter: document.querySelector(".js-todo-filter"),
  list: document.querySelector(".js-todo-list"),
};

const LS_LATEST_TASK_ID_KEY = "GLOBAL_LATEST_TASK_ID";

elements.form.addEventListener("submit", onSubmit);
elements.list.addEventListener("click", onTaskClick);

function onSubmit(event) {
  event.preventDefault();

  const formValues = {};
  [...this.elements].forEach(
    ({ name, value }) => name && value && (formValues[name] = value)
  );

  elements.list.insertAdjacentHTML("beforeend", createTaskMarkup(formValues));

  this.elements.description.value = "";
  this.elements.priority.selectedIndex = 0;
}

function createTaskMarkup({ description, priority }) {
  const taskId = getNewLocalStorageId();
  return `
    <li class="todo-item" data-task-id="${taskId}">
      <p class="description" name="description">${description}</p>
      <span class="priority">${priority}</span>
      <div class="controls">
        <button class="done-btn item-btn js-done" type="button">Mark Done</button>
        <button class="remove-btn item-btn js-remove" type="button">Remove</button>
      </div>
    </li>
  `;
}

function onTaskClick(event) {
  const target = event.target;

  if (target.classList.contains("js-done")) {
    handleDone(event);
  }

  if (target.classList.contains("js-remove")) {
    handleRemove(event);
  }
}

function getNewLocalStorageId() {
  let id = localStorage.getItem(LS_LATEST_TASK_ID_KEY);

  if (!id) {
    localStorage.setItem(LS_LATEST_TASK_ID_KEY, 0);
    return 0;
  }

  id = Number(id) + 1;
  localStorage.setItem(LS_LATEST_TASK_ID_KEY, id);
  return id;
}

function handleDone(event) {
  const task = event.target.closest(".todo-item");
  task.classList.add("done");

  const text = task.firstElementChild.innerText;
  const taskId = task.dataset.taskId;
  console.log(taskId);
  console.log(`Task \`${text}\` with id \`${taskId}\`is marked as Done ✔`);
}

function handleRemove(event) {
  console.log("Remove ❌");
}
