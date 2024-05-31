// i18next.d.ts
import "i18next";
import translationEN from "@/utils/locales/en-US.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof translationEN;
    };
  }
}
