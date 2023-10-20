import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { ru } from "./ru";
import { am } from "./am";
import { getLanguageFromLocalStorage } from "helpers/localStorageLanguage";

const resources = {
  en,
  ru,
  am,
};

const i18nOptions: InitOptions = {
  resources,
  lng: getLanguageFromLocalStorage() || 'en',

  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).init(i18nOptions);

export default i18n;
