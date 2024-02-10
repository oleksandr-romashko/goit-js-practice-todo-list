const _taskClasses = {
  priority: {
    low: ".translation-priority-low",
    medium: ".translation-priority-medium",
    high: ".translation-priority-high",
  },
  btns: {
    doneBtn: ".translation-task-done-btn",
    removeBtn: ".translation-task-remove-btn",
  },
};

// TODO: Add aria labels and their translations to HTML elements
const _translations = [
  {
    description: "form title",
    classSelector: ".translation-form-title",
    "en-US": { textContent: "ToDo List" },
    "en-GB": { textContent: "ToDo List" },
    "de-DE": {},
    "cs-CZ": { textContent: "Seznam úkolů" },
    "fr-FR": {},
    "uk-UA": { textContent: "Список задач" },
    "ru-RU": { textContent: "Список задач" },
  },
  {
    description: "form description label",
    classSelector: ".translation-description-label",
    "en-US": { textContent: "Task" },
    "en-GB": { textContent: "Task" },
    "de-DE": {},
    "cs-CZ": { textContent: "Úkol" },
    "fr-FR": {},
    "uk-UA": { textContent: "Завдання" },
    "ru-RU": { textContent: "Задача" },
  },
  {
    description: "form description input",
    classSelector: ".translation-description-input",
    "en-US": { placeholder: "Description" },
    "en-GB": { placeholder: "Description" },
    "de-DE": {},
    "cs-CZ": { placeholder: "Popis" },
    "fr-FR": {},
    "uk-UA": { placeholder: "Опис" },
    "ru-RU": { placeholder: "Описание" },
  },
  {
    description: "form priority select label",
    classSelector: ".translation-priority-label",
    "en-US": { textContent: "Priority" },
    "en-GB": { textContent: "Priority" },
    "de-DE": {},
    "cs-CZ": { textContent: "Priorita" },
    "fr-FR": {},
    "uk-UA": { textContent: "Пріоритет" },
    "ru-RU": { textContent: "Приоритет" },
  },
  {
    description: "form priority select value low",
    classSelector: _taskClasses.priority.low,
    "en-US": { textContent: "Low" },
    "en-GB": { textContent: "Low" },
    "de-DE": {},
    "cs-CZ": { textContent: "Nízká" },
    "fr-FR": {},
    "uk-UA": { textContent: "Низький" },
    "ru-RU": { textContent: "Низкий" },
  },
  {
    description: "form priority select value medium",
    classSelector: _taskClasses.priority.medium,
    "en-US": { textContent: "Medium" },
    "en-GB": { textContent: "Medium" },
    "de-DE": {},
    "cs-CZ": { textContent: "Střední" },
    "fr-FR": {},
    "uk-UA": { textContent: "Cередній" },
    "ru-RU": { textContent: "Средний" },
  },
  {
    description: "form priority select value high",
    classSelector: _taskClasses.priority.high,
    "en-US": { textContent: "High" },
    "en-GB": { textContent: "High" },
    "de-DE": {},
    "cs-CZ": { textContent: "Vysoká" },
    "fr-FR": {},
    "uk-UA": { textContent: "Високий" },
    "ru-RU": { textContent: "Высокий" },
  },
  {
    description: "form submit button",
    classSelector: ".translation-submit-btn",
    "en-US": { textContent: "➕ Submit" },
    "en-GB": { textContent: "➕ Submit" },
    "de-DE": {},
    "cs-CZ": { textContent: "➕ Přidat" },
    "fr-FR": {},
    "uk-UA": { textContent: "➕ Додати" },
    "ru-RU": { textContent: "➕ Добавить" },
  },
  {
    description: "filter 'all' button",
    classSelector: ".translation-filter-all-btn-text",
    "en-US": { textContent: "All" },
    "en-GB": { textContent: "All" },
    "de-DE": {},
    "cs-CZ": { textContent: "Všechny" },
    "fr-FR": {},
    "uk-UA": { textContent: "Всі" },
    "ru-RU": { textContent: "Все" },
  },
  {
    description: "filter 'in progress' button",
    classSelector: ".translation-filter-in-progress-btn-text",
    "en-US": { textContent: "In progress" },
    "en-GB": { textContent: "In progress" },
    "de-DE": {},
    "cs-CZ": { textContent: "Probíhající" },
    "fr-FR": {},
    "uk-UA": { textContent: "Виконуються" },
    "ru-RU": { textContent: "Выполняются" },
  },
  {
    description: "filter 'done' button",
    classSelector: ".translation-filter-done-btn-text",
    "en-US": { textContent: "Done" },
    "en-GB": { textContent: "Done" },
    "de-DE": {},
    "cs-CZ": { textContent: "Vyřízené" },
    "fr-FR": {},
    "uk-UA": { textContent: "Виконані" },
    "ru-RU": { textContent: "Выполненные" },
  },
  {
    description: "filter 'low' button",
    classSelector: ".translation-filter-low-btn-text",
    "en-US": { textContent: "Low" },
    "en-GB": { textContent: "Low" },
    "de-DE": {},
    "cs-CZ": { textContent: "Nízká" },
    "fr-FR": {},
    "uk-UA": { textContent: "Низький" },
    "ru-RU": { textContent: "Низкий" },
  },
  {
    description: "filter 'medium' button",
    classSelector: ".translation-filter-medium-btn-text",
    "en-US": { textContent: "Medium" },
    "en-GB": { textContent: "Medium" },
    "de-DE": {},
    "cs-CZ": { textContent: "Střední" },
    "fr-FR": {},
    "uk-UA": { textContent: "Cередній" },
    "ru-RU": { textContent: "Средний" },
  },
  {
    description: "filter 'high' button",
    classSelector: ".translation-filter-high-btn-text",
    "en-US": { textContent: "High" },
    "en-GB": { textContent: "High" },
    "de-DE": {},
    "cs-CZ": { textContent: "Vysoká" },
    "fr-FR": {},
    "uk-UA": { textContent: "Високий" },
    "ru-RU": { textContent: "Высокий" },
  },
  {
    description: "task mark done button",
    classSelector: _taskClasses.btns.doneBtn,
    "en-US": { textContent: "✔ Mark Done" },
    "en-GB": { textContent: "✔ Mark Done" },
    "de-DE": {},
    "cs-CZ": { textContent: "✔ Hotový" },
    "fr-FR": {},
    "uk-UA": { textContent: "✔ Виконано" },
    "ru-RU": { textContent: "✔ Сделано" },
  },
  {
    description: "task remove button",
    classSelector: _taskClasses.btns.removeBtn,
    "en-US": { textContent: "❌ Remove" },
    "en-GB": { textContent: "❌ Remove" },
    "de-DE": {},
    "cs-CZ": { textContent: "❌ Odebrat" },
    "fr-FR": {},
    "uk-UA": { textContent: "❌ Видалити" },
    "ru-RU": { textContent: "❌ Удалить" },
  },
  {
    description: "status for the to do list when no tasks",
    classSelector: ".todo-status .no-tasks",
    "en-US": {
      textContent:
        "There are no tasks in the to-do list. You can add the first one.",
    },
    "en-GB": {
      textContent:
        "There are no tasks in the to-do list. You can add the first one.",
    },
    "de-DE": {},
    "cs-CZ": {
      textContent:
        "V seznamu úkolů nejsou žádné úkoly. Chcete-li začít, můžete přidat první.",
    },
    "fr-FR": {},
    "uk-UA": {
      textContent:
        "У списку задач немає жодного завдання. Для початку можна додати перше.",
    },
    "ru-RU": {
      textContent:
        "В списке задач нет ни одной задачи. Для начала можна добавить первую.",
    },
  },
  {
    description: "status for the to do list whet no tasks after filtration",
    classSelector: ".todo-status .filter-empty",
    "en-US": {
      textContent:
        "After applying the filter, there are no tasks left. Try a different filter option.",
    },
    "en-GB": {
      textContent:
        "After applying the filter, there are no tasks left. Try a different filter option.",
    },
    "de-DE": {},
    "cs-CZ": {
      textContent:
        "Po použití filtru nezbývají žádné úkoly. Zkuste jinou možnost filtru.",
    },
    "fr-FR": {},
    "uk-UA": {
      textContent:
        "Після застосування фільтра не залишилося завдань. Спробуйте іншу опцію фільтра.",
    },
    "ru-RU": {
      textContent:
        "После применения фильтра не осталось задач. Попробуйте другую опцию фильтра.",
    },
  },
];

export const translatePage = function (locale, tasksNumber) {
  document.documentElement.setAttribute("lang", locale.htmlLangAttribute);
  _translations.forEach(translation => {
    const htmlElements = document.querySelectorAll(translation.classSelector);
    if (!htmlElements.length) {
      if (!tasksNumber) {
        return;
      }
      console.error(
        "Page translation error:\n" +
          `Element '${translation.description}' ` +
          `with class selector '${translation.classSelector}' ` +
          `was not found.\n` +
          "Please check translation class selector value configuration " +
          "or HTML markup element class list for this element."
      );
      return;
    }
    htmlElements.forEach(htmlElement =>
      _translateSingleElement(translation, htmlElement, locale)
    );
  });
};

export function translateTaskValue(localeCode, priorityValue) {
  const priorityClass = _taskClasses.priority[priorityValue];
  return _translations.find(el => el.classSelector === priorityClass)[
    localeCode
  ].textContent;
}

export function getTaskBtnsTranslation(localeCode) {
  const doneBtnClass = _taskClasses.btns.doneBtn;
  const removeBtnClass = _taskClasses.btns.removeBtn;
  const doneBtnText = _translations.find(
    el => el.classSelector === doneBtnClass
  )[localeCode].textContent;
  const removeBtnText = _translations.find(
    el => el.classSelector === removeBtnClass
  )[localeCode].textContent;
  return {
    doneBtnText: doneBtnText,
    removeBtnText: removeBtnText,
  };
}

function _translateSingleElement(listEl, htmlElement, locale) {
  const translation = listEl[locale.code];
  htmlElement.lang = locale.htmlLangAttribute;
  for (const attribute in translation) {
    if (attribute in htmlElement) {
      htmlElement[attribute] = translation[attribute];
    } else {
      console.error(
        "Page translation error:\n" +
          `Element '${listEl.description}' ` +
          `with class selector '${listEl.classSelector}' ` +
          `does not have attribute '${attribute}'.\n` +
          "Please check translation attribute configuration for this element."
      );
    }
  }
}
