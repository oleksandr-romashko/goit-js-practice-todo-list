const storage = {
  _LS_LATEST_TASK_ID_KEY: "TODO_GLOBAL_LATEST_TASK_ID",
  _LS_WIP_TASK_DESCRIPTION_KEY: "TODO_WIP_TASK_DESCRIPTION",
  _LS_TASKS_KEY: "TODO_TASKS",
  getTasksInitValue: function () {
    return this._getValue(this._LS_TASKS_KEY);
  },
  getDescriptionInitValue: function () {
    return this._getValue(this._LS_WIP_TASK_DESCRIPTION_KEY);
  },
  cleanUpInputValue: function () {
    this._removeValue(this._LS_WIP_TASK_DESCRIPTION_KEY);
  },
  updateTextCacheValue: function (value) {
    this._setValue(this._LS_WIP_TASK_DESCRIPTION_KEY, value);
  },
  updateStorage() {
    this._setValue(this._LS_TASKS_KEY, tasks.getList());
  },
  getNewId: function () {
    let id = localStorage.getItem(this._LS_LATEST_TASK_ID_KEY);

    if (!id) {
      localStorage.setItem(this._LS_LATEST_TASK_ID_KEY, 0);
      return 0;
    }

    id = Number(id) + 1;
    localStorage.setItem(this._LS_LATEST_TASK_ID_KEY, id);
    return id;
  },
  _getValue: function (key) {
    let item = localStorage.getItem(key) ?? "";
    if (item) {
      try {
        item = JSON.parse(item);
        return item;
      } catch (error) {
        console.error(error);
        return error;
      }
    }

    return item;
  },
  _setValue: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  _removeValue: function (key) {
    localStorage.removeItem(key);
  },
};

const tasks = {
  _list: [],
  init: function () {
    const storageTasks = storage.getTasksInitValue();
    const tasksInStorage = storageTasks.length;
    if (tasksInStorage) {
      this._list = storageTasks;
    }
    switch (tasksInStorage) {
      case 0: {
        console.log("There are no tasks in the local storage.");
        break;
      }
      case 1: {
        this._list = storageTasks;
        console.log("One task was downloaded from local storage.");
        break;
      }
      default: {
        this._list = storageTasks;
        console.log(
          `A total of ${tasksInStorage} tasks were downloaded from local storage.`
        );
      }
    }
  },
  getList: function () {
    return this._list;
  },
  addTask: function (formValues) {
    const task = {};
    for (const value in formValues) {
      task[value] = formValues[value];
    }
    task.id = storage.getNewId();
    task.isDone = false;
    this._list.push(task);
    return this._list.length;
  },
  updateDoneStatus: function (id, isDone) {
    const tasksListId = this._list.findIndex(({ id: elementId }) => {
      return elementId == id;
    });
    this._list[tasksListId].isDone = isDone;
    return this._list[tasksListId];
  },
  removeTaskById: function (id) {
    const tasksListId = this._list.findIndex(({ id: elementId }) => {
      return elementId === id;
    });
    const deletedTask = this._list[tasksListId];
    this._list.splice(tasksListId, 1);
    return deletedTask;
  },
};

//TODO Add "x" button to the input to clear content
//TODO OnFormLoad -> focus on input (maybe) - mobile will open keyboard - not appropriate
const elements = {
  _form: document.querySelector(".js-todo-form"),
  _filter: document.querySelector(".js-todo-filter"),
  _list: document.querySelector(".js-todo-list"),
  init: function () {
    this._form.addEventListener("submit", onSubmit);
    this._form.addEventListener("input", onInput);
    this._list.addEventListener("click", onTaskClick);

    const storageDescValue = storage.getDescriptionInitValue();
    this._form.description.value = storageDescValue ? storageDescValue : "";

    this.renderToDoList(tasks.getList());
  },
  renderToDoList: function () {
    this._list.innerHTML = "";
    this._list.insertAdjacentHTML(
      "beforeend",
      this.createToDoList(tasks.getList())
    );
  },
  createToDoList: function (arr) {
    return arr.map(el => this.createTaskMarkup(el)).join("");
  },
  createTaskMarkup: function ({ description, priority, isDone, id }) {
    console.log(isDone);
    const isDoneClass = isDone === "true" ? "done" : "";
    return `
    <li class="todo-item ${isDoneClass}" data-is-done="${isDone}" data-task-id="${id}">
      <p class="description" name="description">${description}</p>
      <span class="priority">${priority}</span>
      <div class="controls">
        <button class="done-btn item-btn js-done" type="button">Mark Done</button>
        <button class="remove-btn item-btn js-remove" type="button">Remove</button>
      </div>
    </li>
  `;
  },
};

tasks.init();
elements.init();

function onSubmit(event) {
  event.preventDefault();

  const formValues = {};
  [...this.elements].forEach(el => {
    if (el.nodeName === "SELECT") {
      return (
        el.name &&
        !!~el.selectedIndex &&
        (formValues[el.name] = el[el.selectedIndex].innerText)
      );
    }

    return el.name && el.value && (formValues[el.name] = el.value);
  });

  tasks.addTask(formValues);
  storage.updateStorage();
  elements.renderToDoList();
  storage.cleanUpInputValue();
  event.currentTarget.reset();
}

// TODO use lodash to supress chatty function
function onInput({ target }) {
  if (target.classList.contains("js-description")) {
    storage.updateTextCacheValue(target.value);
  }
}

function onTaskClick({ target }) {
  if (
    target.classList.contains("js-done") &&
    target.closest(".todo-item").dataset.isDone === "false"
  ) {
    handleDone(target);
  }

  if (target.classList.contains("js-remove")) {
    handleRemove(target);
  }
}

function handleDone(target) {
  const task = target.closest(".todo-item");
  const taskId = task.dataset.taskId;
  const text = task.firstElementChild.innerText;

  task.classList.add("done");
  tasks.updateDoneStatus(taskId, "true");
  storage.updateStorage();

  console.log(`Task \`${text}\` with id \`${taskId}\` was marked as Done ✔`);
}

function handleRemove(target) {
  const task = target.closest(".todo-item");
  const taskId = Number(task.dataset.taskId);
  const text = task.firstElementChild.innerText;
  const isDone = task.classList.contains("done");

  tasks.removeTaskById(taskId);
  storage.updateStorage();
  elements.renderToDoList();

  console.log(
    `Task \`${text}\` with id \`${taskId}\` and done status \`${isDone}\` was removed ❌`
  );
}
