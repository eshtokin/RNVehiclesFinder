import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = require("./en.json");
const ru = require("./ru.json");

export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "ru",
});

export default i18n;
