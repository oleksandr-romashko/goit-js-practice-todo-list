const _taskClasses = {
  priority: {
    low: ".translation-priority-low",
    medium: ".translation-priority-medium",
    high: ".translation-priority-high",
  },
  btns: {
    doneBtn: ".translation-task-done-btn-text",
    removeBtn: ".translation-task-remove-btn-text",
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
    "en-US": {
      placeholder: "Description",
      title: "Please fill out this field and describe the task",
    },
    "en-GB": {
      placeholder: "Description",
      title: "Please fill out this field and describe the task",
    },
    "de-DE": {},
    "cs-CZ": {
      placeholder: "Popis",
      title: "Vyplňte prosím toto pole a popište úkol",
    },
    "fr-FR": {},
    "uk-UA": {
      placeholder: "Опис",
      title: "Будь ласка, заповніть це поле та опишіть завдання",
    },
    "ru-RU": {
      placeholder: "Описание",
      title: "Пожалуйста заполните это поле и опишите задачу",
    },
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
    description: "form priority select label",
    classSelector: ".translation-priority-select",
    "en-US": { title: "Set the task priority" },
    "en-GB": { title: "Set the task priority" },
    "de-DE": {},
    "cs-CZ": { title: "Nastavit prioritu úkolu" },
    "fr-FR": {},
    "uk-UA": { title: "Задати пріоритет завданню" },
    "ru-RU": { title: "Установить приоритет задачи" },
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
    description: "form submit button icon",
    classSelector: ".translation-submit-btn-icon",
    "en-US": { textContent: "+" },
    "en-GB": { textContent: "+" },
    "de-DE": {},
    "cs-CZ": { textContent: "+" },
    "fr-FR": {},
    "uk-UA": { textContent: "+" },
    "ru-RU": { textContent: "+" },
  },
  {
    description: "form submit button text",
    classSelector: ".translation-submit-btn-text",
    "en-US": { textContent: "Submit" },
    "en-GB": { textContent: "Submit" },
    "de-DE": {},
    "cs-CZ": { textContent: "Přidat" },
    "fr-FR": {},
    "uk-UA": { textContent: "Додати" },
    "ru-RU": { textContent: "Добавить" },
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
    description: "task mark done button icon",
    classSelector: ".translation-task-done-btn-icon",
    "en-US": { textContent: "✔" },
    "en-GB": { textContent: "✔" },
    "de-DE": {},
    "cs-CZ": { textContent: "✔" },
    "fr-FR": {},
    "uk-UA": { textContent: "✔" },
    "ru-RU": { textContent: "✔" },
  },
  {
    description: "task mark done button text",
    classSelector: _taskClasses.btns.doneBtn,
    "en-US": { textContent: "Mark Done" },
    "en-GB": { textContent: "Mark Done" },
    "de-DE": {},
    "cs-CZ": { textContent: "Hotový" },
    "fr-FR": {},
    "uk-UA": { textContent: "Виконано" },
    "ru-RU": { textContent: "Сделано" },
  },
  {
    description: "task remove button icon",
    classSelector: ".translation-task-remove-btn-icon",
    "en-US": { textContent: "✘" },
    "en-GB": { textContent: "✘" },
    "de-DE": {},
    "cs-CZ": { textContent: "✘" },
    "fr-FR": {},
    "uk-UA": { textContent: "✘" },
    "ru-RU": { textContent: "✘" },
  },
  {
    description: "task remove button text",
    classSelector: _taskClasses.btns.removeBtn,
    "en-US": { textContent: "Remove" },
    "en-GB": { textContent: "Remove" },
    "de-DE": {},
    "cs-CZ": { textContent: "Odebrat" },
    "fr-FR": {},
    "uk-UA": { textContent: "Видалити" },
    "ru-RU": { textContent: "Удалить" },
  },
  {
    description: "status for the to do list when no tasks in the tasks list",
    classSelector: ".translation-todo-status-no-task",
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
    description:
      "status for the to do list when there are tasks in tasks list but no tasks shown after filtration",
    classSelector: ".translation-todo-status-empty-filter",
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
  {
    description: "additional explaining text for clear storage button - title",
    classSelector: ".translation-aux-text-title",
    "en-US": {
      textContent: "Clear all application data",
    },
    "en-GB": {
      textContent: "Clear all application data",
    },
    "de-DE": {},
    "cs-CZ": {
      textContent: "Smazání všech dat aplikace",
    },
    "fr-FR": {},
    "uk-UA": {
      textContent: "Очистити всі дані застосунку",
    },
    "ru-RU": {
      textContent: "Очистить все данные приложения",
    },
  },
  {
    description:
      "additional explaining text for clear storage button - description",
    classSelector: ".clear-storage .translation-aux-text-description",
    "en-US": {
      textContent:
        "All data associated with this app will be permanently deleted.",
    },
    "en-GB": {
      textContent:
        "All data associated with this app will be permanently deleted.",
    },
    "de-DE": {},
    "cs-CZ": {
      textContent:
        "Všechna data spojená s touto aplikací budou trvale smazána.",
    },
    "fr-FR": {},
    "uk-UA": {
      textContent:
        "Усі дані, пов’язані з цим застосунком, буде остаточно видалено.",
    },
    "ru-RU": {
      textContent:
        "Все данные, связанные с этим приложением, будут удалены без возможности восстановления.",
    },
  },
];

const _customTranslations = {
  clearAllConfirmationText: {
    description: "confirmation box for clear all data",
    "en-US": {
      textContent:
        "Are you sure you want to delete all app data?\n" +
        "This action cannot be undone and all information (tasks and settings) will be lost!\n" +
        "Please confirm to proceed.",
    },
    "en-GB": {
      textContent:
        "Are you sure you want to delete all app data?\n" +
        "This action cannot be undone and all information (tasks and settings) will be lost!\n" +
        "Please confirm to proceed.",
    },
    "de-DE": {},
    "cs-CZ": {
      textContent:
        "Opravdu chcete smazat všechna data aplikace?\n" +
        "Tuto akci nelze vrátit zpět a všechny informace (úkoly a nastavení) budou ztraceny!\n" +
        "Chcete-li pokračovat, potvrďte.",
    },
    "fr-FR": {},
    "uk-UA": {
      textContent:
        "Ви впевнені, що бажаєте видалити всі дані програми?\n" +
        "Цю дію неможливо скасувати, і вся інформація (завдання та налаштування) буде втрачена!\n" +
        "Будь ласка, підтвердьте, щоб продовжити.",
    },
    "ru-RU": {
      textContent:
        "Вы уверены, что хотите удалить все данные приложения?\n" +
        "Это действие невозможно отменить и вся информация (задачи и настройки) будет утеряна!\n" +
        "Пожалуйста, подтвердите, чтобы продолжить.",
    },
  },
};

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

export function getClearAllConfirmationText(localeCode) {
  return _customTranslations.clearAllConfirmationText[localeCode].textContent;
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
