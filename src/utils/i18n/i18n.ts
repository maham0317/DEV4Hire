import i18n from "i18next"; 
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en-US.json";
import translationNO from "../locales/no-NO.json";


console.log("Initializing i18n...");

const resources: Record<string, { translation: Record<string, string | object> }> = {
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

  // keySeparator: false,
  fallbackLng:"en",
  interpolation: {
    escapeValue: false,
  },
});

console.log("i18n initialized:", i18n);

export default i18n;
// i18n.js
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import translationEN from "../locales/en-US.json";
// import translationNO from "../locales/no-NO.json";
 
// // Add translations
// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   "no-NO": {
//         translation: translationNO,
//       },
// };
 
// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     lng: "en", // default language
//     interpolation: {
//       escapeValue: false, // react already safes from xss
//     },
//   });
 
// export default i18n;