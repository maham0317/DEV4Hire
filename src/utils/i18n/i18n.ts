import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@/utils/locales/en-US.json";
import translationNO from "@/utils/locales/no-NO.json";

const resources: Record<
  string,
  { translation: Record<string, string | object> }
> = {
  "en-US": {
    translation: translationEN,
  },
  "no-NO": {
    translation: translationNO,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en-US", // default language to en-US

  // keySeparator: false,
  fallbackLng: "en", // fallback language if translation is missing
    debug: true,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
