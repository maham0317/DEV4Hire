import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@/utils/locales/en-US.json";
import translationNO from "@/utils/locales/no-NO.json";

console.log("Initializing i18n...");

const resources: Record<string, { translation: Record<string, string> }> = {
  "en-US": {
    translation: translationEN,
  },
  "no-NO": {
    translation: translationNO,
  },
};

console.log("Initializing i18n...");
i18n.use(initReactI18next).init({
  resources,
  lng: "en-US",

  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

console.log("i18n initialized:", i18n);

export default i18n;
