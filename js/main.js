import * as locales from "./locales.js";
import * as translator from "./translator.js";

const storage = {
  _LS_CURRENT_LOCALE: "TODO_CURRENT_LOCALE",
  _LS_LATEST_TASK_ID_KEY: "TODO_GLOBAL_LATEST_TASK_ID",
  _LS_WIP_TASK_DESCRIPTION_KEY: "TODO_WIP_TASK_DESCRIPTION",
  _LS_TASKS_KEY: "TODO_TASKS",
  getCurrentLocale: function () {
    let currentLocaleCode = this._getValue(this._LS_CURRENT_LOCALE);

    // TODO: separate both cases. Second one is for the case of unvalid value
    // TODO: of the lang code (error or depricated).
    // TODO: default lang will be applied and interface lang will be reseted.
    // TODO: it is better to inform user about this change somehow (label/alert/...)
    // TODO: but may frustrate if first time visit
    if (
      !currentLocaleCode ||
      !~locales.getLocaleIndexByCode(currentLocaleCode)
    ) {
      currentLocaleCode = locales.getDefaultLocaleCode();
      this._setValue(this._LS_CURRENT_LOCALE, currentLocaleCode);
    }

    return locales.getLocaleByCode(currentLocaleCode);
  },
  updateLocale: function (localeCode) {
    this._setValue(this._LS_CURRENT_LOCALE, localeCode);
  },
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
//TODO Language select in top right corner of the form. stored in array and each lang according to select selectedIndex
//TODO Language selector on hover making arrow normal size, otherwise minimized to lower buttom, animated
const elements = {
  _languagePicker: document.querySelector(".js-lang-picker"),
  _form: document.querySelector(".js-todo-form"),
  _filter: document.querySelector(".js-todo-filter"),
  _list: document.querySelector(".js-todo-list"),
  init: function () {
    this._renderLanguageOptions();
    this._languagePicker.addEventListener("click", onLangPickerClick);
    window.addEventListener("click", onWindowClick);

    const storageDescValue = storage.getDescriptionInitValue();
    this._form.description.value = storageDescValue ? storageDescValue : "";
    this._form.addEventListener("submit", onSubmit);
    this._form.addEventListener("input", onInput);

    this._list.addEventListener("click", onTaskClick);

    this.renderToDoList(tasks.getList());

    const currentLocale = storage.getCurrentLocale();
    this.translatePage(currentLocale);
    if (currentLocale.code === locales.getDefaultLocaleCode()) {
      console.log(
        `Loaded default interface \'${currentLocale.name}\' (\'${currentLocale.alias}\', \'${currentLocale.code}\').`
      );
    } else {
      console.log(
        `Loaded interface \'${currentLocale.name}\' (\'${currentLocale.alias}\', \'${currentLocale.code}\').`
      );
    }
  },
  translatePage: function (locale) {
    translator.translatePage(locale, tasks.getList().length);
    this._renderLanguageOptions();
  },
  checkDisplayFilter() {
    if (tasks.getList().length > 1) {
      this._filter.classList.remove("visuallyhidden");
    } else {
      this._filter.classList.add("visuallyhidden");
    }
  },
  renderToDoList: function () {
    elements.checkDisplayFilter();
    const markdown = this._createToDoList(tasks.getList());
    this._list.innerHTML = "";
    this._list.insertAdjacentHTML("beforeend", markdown);
  },
  _renderLanguageOptions: function () {
    const markup = locales.list
      .filter(({ isShown }) => isShown)
      .map(el => this._createLanguageItemMarkup(el))
      .join("");
    this._languagePicker.lastElementChild.innerHTML = "";
    this._languagePicker.lastElementChild.insertAdjacentHTML(
      "afterbegin",
      markup
    );
  },
  _createLanguageItemMarkup({ code, name, htmlLangAttribute, iconId }) {
    const currentLocale = storage.getCurrentLocale();
    const classIsCurrentLang =
      currentLocale.code === code ? "js-is-current-lang" : "";
    return `
      <li lang="${htmlLangAttribute}" class="dropdown-content-item js-lang-dropdown-item ${classIsCurrentLang}" href="#" data-lang-code="${code}">
        <svg class="lang-checkmark ${
          currentLocale.code === code ? "is-current-lang" : ""
        }" width="24" height="24" visibility="hidden">
          <use href="./img/sprite.svg#checkmark"></use>
        </svg>
        <svg class="lang-picker-icon" width="24" height="24">
          <use href="./img/sprite.svg#${iconId}"></use>
        </svg>
        <span>${name}</span>
      </li>
    `;
  },
  _createToDoList: function (tasksList) {
    const currentLocale = storage.getCurrentLocale();
    const taskBtnsText = translator.getTaskBtnsTranslation(currentLocale.code);

    return tasksList
      .map(el => this._createTaskMarkup(currentLocale, el, taskBtnsText))
      .join("");
  },
  _createTaskMarkup: function (
    currentLocale,
    { id, description, priority: priorityValue, isDone },
    { doneBtnText, removeBtnText }
  ) {
    const priorityText = translator.translateTaskValue(
      currentLocale.code,
      priorityValue
    );
    const isDoneClass = isDone === "true" ? "done" : "";

    return `
    <li
        class="todo-item ${isDoneClass}" 
        data-is-done="${isDone}" 
        data-task-id="${id}" 
    >
      <p class="description" name="description">${description}</p>
      <span
        class="priority translation-priority-${priorityValue}"
        lang="${currentLocale.htmlLangAttribute}">
          ${priorityText}
      </span>
      <div class="controls">
        <button
          class="done-btn item-btn js-done translation-task-done-btn"
          type="button"
          lang="${currentLocale.htmlLangAttribute}">
            ${doneBtnText}
        </button>
        <button
          class="remove-btn item-btn js-remove translation-task-remove-btn"
          type="button"
          lang="${currentLocale.htmlLangAttribute}">
            ${removeBtnText}
        </button>
      </div>
    </li>
  `;
  },
};

tasks.init();
elements.init();

function onLangPickerClick({ target }) {
  const dropdownBtn = target.closest(".js-drop-btn");
  if (dropdownBtn) {
    const content = dropdownBtn.nextElementSibling;
    if (content.hidden) {
      content.hidden = false;
    } else {
      content.hidden = true;
    }
  }

  const dropdownItem = target.closest(".js-lang-dropdown-item");
  if (dropdownItem) {
    dropdownItem.closest(".dropdown-content").hidden = true;
    const langCode = dropdownItem.dataset.langCode;
    const locale = locales.getLocaleByCode(langCode);
    if (dropdownItem.classList.contains("js-is-current-lang")) {
      console.log(
        `Staying on the same language \'${locale.name}\' (${locale.alias}, ${locale.code}).`
      );
    } else {
      // Switch to other language
      storage.updateLocale(langCode);
      elements.translatePage(locale);
      console.log(
        `Switched to language \'${locale.name}\' (${locale.alias}, ${locale.code}).`
      );
    }
  }
}

function onSubmit(event) {
  event.preventDefault();

  const formValues = {};
  [...this.elements].forEach(el => {
    if (el.nodeName === "SELECT") {
      return (
        el.name &&
        !!~el.selectedIndex &&
        (formValues[el.name] = el[el.selectedIndex].value)
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

  task.classList.add("done");
  tasks.updateDoneStatus(taskId, "true");
  storage.updateStorage();

  console.log(`The task with id \`${taskId}\` was marked as ✔ Done.`);
}

function handleRemove(target) {
  const task = target.closest(".todo-item");
  const taskId = Number(task.dataset.taskId);
  const isDone = task.classList.contains("done");

  tasks.removeTaskById(taskId);
  storage.updateStorage();
  elements.renderToDoList();

  if (isDone) {
    console.log(
      `The task with id \`${taskId}\` and which was done has been ❌ removed.`
    );
  } else {
    console.log(
      `The task with id \`${taskId}\` and which was not done has been ❌ removed.`
    );
  }
}

// Close the dropdown menu if the user clicks outside of it
function onWindowClick(event) {
  if (!event.target.closest(".js-lang-picker")) {
    const content = elements._languagePicker.lastElementChild;
    if (!content.hidden) {
      content.hidden = true;
    }
  }
}
