/**
 * @param code The prefix, is a language code following the ISO 639-1 standard.
 *             The suffix, is a country code following the ISO 3166-1 Alpha- 2 standard.
 * @param htmlLangAttribute Assigned to HTML element as lang arrtibute.
 *                          ISO 639-1 https://www.w3schools.com/tags/ref_language_codes.asp
 */
export const list = [
  {
    code: "en-US",
    name: "English",
    alias: "english-us",
    htmlLangAttribute: "en",
    iconId: "country-flag-united-states",
    isShown: false,
  },
  {
    isDefault: true,
    code: "en-GB",
    name: "English",
    alias: "english-gb",
    htmlLangAttribute: "en",
    iconId: "country-flag-united-kingdom",
    isShown: true,
  },
  {
    code: "de-DE",
    name: "Deutsch",
    alias: "german",
    htmlLangAttribute: "de",
    iconId: "country-flag-germany",
    isShown: false,
  },
  {
    code: "cs-CZ",
    name: "Čeština",
    alias: "czech",
    htmlLangAttribute: "cs",
    iconId: "country-flag-czech-republic",
    isShown: true,
  },
  {
    code: "fr-FR",
    name: "Français",
    alias: "french",
    htmlLangAttribute: "fr",
    iconId: "country-flag-france",
    isShown: false,
  },
  {
    code: "uk-UA",
    name: "Українська",
    alias: "ukrainian",
    htmlLangAttribute: "uk",
    iconId: "country-flag-ukraine",
    isShown: true,
  },
  {
    code: "ru-RU",
    name: "Русский",
    alias: "russian",
    htmlLangAttribute: "ru",
    iconId: "country-flag-russia-404",
    isShown: false,
  },
];

export const getDefaultLocaleCode = function () {
  return this.list.find(({ isDefault }) => isDefault).code;
};

export const getLocaleByCode = function (searchedCode) {
  return this.list.find(({ code }) => code === searchedCode);
};

export const getLocaleIndexByCode = function (searchedCode) {
  return this.list.findIndex(({ code }) => code === searchedCode);
};
